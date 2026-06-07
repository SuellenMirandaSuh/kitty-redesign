import { Link } from "wouter";
import { SiteLayout } from "./SiteLayout";

type SubPageShellProps = {
  tag: string;
  title: string;
  subtitle?: string;
  wide?: boolean;
  children: React.ReactNode;
};

export function SubPageShell({ tag, title, subtitle, wide, children }: SubPageShellProps) {
  return (
    <SiteLayout showCredits>
      <main style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ maxWidth: wide ? "1100px" : "800px" }}>
          <Link
            href="/"
            className="link-animated reveal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            ← Back to Home
          </Link>

          <div className="reveal" style={{ marginBottom: "2.5rem" }}>
            <div className="amber-sep" style={{ marginBottom: "1.25rem" }} />
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "oklch(0.72 0.19 55)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {tag}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "oklch(0.97 0.005 260)",
                letterSpacing: "-0.03em",
                marginBottom: subtitle ? "0.75rem" : 0,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  color: "oklch(0.6 0.01 260)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          <div
            className="reveal card-glow"
            style={{
              padding: "2rem",
              borderRadius: "0.75rem",
              color: "oklch(0.78 0.01 260)",
              lineHeight: 1.85,
              fontSize: "1rem",
            }}
          >
            {children}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

export function ProseLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className="link-animated"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ fontWeight: 500 }}
    >
      {children}
    </a>
  );
}

export function ProseSection({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "1.75rem" }}>
      {title && (
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "oklch(0.72 0.19 55)",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
