import express from "express";
import { createServer } from "http";
import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORAGE_MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".png": "image/png",
};

function resolveLocalStoragePath(storageDir: string, key: string): string | null {
  const candidates = [key.split("?")[0]];
  const base = candidates[0];
  if (base.endsWith(".webp")) {
    candidates.push(base.replace(/\.webp$/, ".jpg"));
  }
  for (const name of candidates) {
    const filePath = path.join(storageDir, name);
    if (fs.existsSync(filePath)) return filePath;
  }
  return null;
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  const storageDir = path.join(staticPath, "manus-storage");
  app.get("/manus-storage/*", (req, res) => {
    const key = req.path.replace(/^\/manus-storage\//, "");
    const filePath = resolveLocalStoragePath(storageDir, key);
    if (!filePath) {
      res.status(404).end("Storage file not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.type(STORAGE_MIME[ext] || "application/octet-stream");
    res.sendFile(filePath);
  });

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
