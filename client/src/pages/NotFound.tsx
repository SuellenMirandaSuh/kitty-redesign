import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="min-h-[70vh] w-full flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "oklch(0.72 0.19 55)",
              letterSpacing: "0.15em",
              marginBottom: "1rem",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 700,
              color: "oklch(0.97 0.005 260)",
              marginBottom: "0.75rem",
            }}
          >
            Page Not Found
          </h1>
          <p style={{ color: "oklch(0.65 0.01 260)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.
          </p>
          <Link href="/">
            <Button
              style={{
                background: "oklch(0.72 0.19 55)",
                color: "oklch(0.1 0.01 260)",
              }}
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
