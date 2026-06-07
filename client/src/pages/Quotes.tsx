import { ProseLink, SubPageShell } from "@/components/SubPageShell";
import { quotes } from "@/data/quotes";

export default function Quotes() {
  return (
    <SubPageShell tag="Collection" title="Kit's Collection of Quotes" subtitle="Obviously, they all mean something to me">
      <p style={{ marginBottom: "1.5rem" }}>
        The list at this link are Taglines from the BBS days. Do we remember those days?
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            style={{
              margin: 0,
              padding: "1rem 1.25rem",
              borderLeft: "3px solid oklch(0.72 0.19 55)",
              background: "oklch(0.13 0.012 260)",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic" }}>"{q.text}"</p>
            {q.author && (
              <footer style={{ marginTop: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "oklch(0.55 0.01 260)" }}>
                — {q.author}
              </footer>
            )}
          </blockquote>
        ))}
      </div>
      <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "oklch(0.55 0.01 260)" }}>
        <ProseLink href="https://kitty.org/quotes.htm">View original page</ProseLink> for the full collection.
      </p>
    </SubPageShell>
  );
}
