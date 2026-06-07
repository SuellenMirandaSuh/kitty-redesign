import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";

const home = import.meta.env.BASE_URL;

type SiteLayoutProps = {
  children: React.ReactNode;
  showCredits?: boolean;
};

export function SiteLayout({ children, showCredits = false }: SiteLayoutProps) {
  useReveal();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "oklch(0.11 0.012 260)",
        color: "oklch(0.96 0.005 260)",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "oklch(0.11 0.012 260 / 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid oklch(0.25 0.01 260)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "3.5rem",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "oklch(0.72 0.19 55)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            Kit's Place
          </Link>
          <nav style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
            {[
              { label: "About", href: `${home}#about` },
              { label: "Veterans", href: `${home}#veterans` },
              { label: "Explore", href: `${home}#explore` },
              { label: "Contact", href: `${home}#contact` },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-animated"
                style={{
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {children}

      {showCredits && (
        <footer style={{ paddingTop: "2rem", paddingBottom: "2.5rem" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <p
              style={{
                display: "inline-block",
                margin: 0,
                padding: "0.5rem 1rem",
                color: "oklch(0.58 0.03 300)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                lineHeight: 1.7,
                background: "oklch(0.45 0.08 300 / 0.08)",
                border: "1px solid oklch(0.5 0.08 300 / 0.2)",
                borderRadius: "0.375rem",
                backdropFilter: "blur(6px)",
              }}
            >
              Design de interface e UX por Suelen Miranda
              <span style={{ margin: "0 0.4rem", color: "oklch(0.48 0.04 300 / 0.6)" }}>·</span>
              <a
                href="https://linkedin.com/in/suellenmiranda"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                LinkedIn
              </a>
              <span style={{ margin: "0 0.4rem", color: "oklch(0.48 0.04 300 / 0.6)" }}>·</span>
              <a href="mailto:suellen.dsredev@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                E-mail
              </a>
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
