import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

if (basePath && !window.location.pathname.startsWith(basePath)) {
  window.location.replace(
    `${basePath}/${window.location.search}${window.location.hash}`
  );
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
