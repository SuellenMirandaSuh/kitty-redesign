import { ProseLink, ProseSection, SubPageShell } from "@/components/SubPageShell";

export default function Cleveland2600() {
  return (
    <SubPageShell tag="Tech" title="2600 Cleveland" subtitle="Share knowledge and information">
      <ProseSection title="Our Mission">
        <p>Share knowledge and information. To help...</p>
      </ProseSection>

      <ProseSection title="Meetings">
        <p>Meetings are held the first Friday of every month.</p>
        <div
          style={{
            marginTop: "1rem",
            padding: "1.25rem",
            background: "oklch(0.13 0.012 260)",
            borderRadius: "0.5rem",
            border: "1px solid oklch(0.22 0.01 260)",
          }}
        >
          <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "oklch(0.72 0.19 55)" }}>Location</p>
          <p style={{ margin: 0 }}>
            Panera Bread, 4103 Richmond Rd.<br />
            Warrensville Hts, OH 44122<br />
            <span style={{ fontSize: "0.9rem", color: "oklch(0.6 0.01 260)" }}>
              In the plaza across from Tri-C Eastern Campus. We start anytime from 5:00 p.m. – close.
            </span>
          </p>
        </div>
      </ProseSection>

      <ProseSection title="Contact">
        <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Mailing List: <ProseLink href="https://groups.google.com/group/oh2600">oh2600 at Google Groups</ProseLink></li>
          <li>Email: <ProseLink href="mailto:kit@kitty.org">kit@kitty.org</ProseLink></li>
          <li>Webmaster: Davedadj at yahoo.com</li>
        </ul>
      </ProseSection>

      <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "oklch(0.5 0.01 260)" }}>
        Content from the <ProseLink href="https://kitty.org/2600">original 2600 Cleveland page</ProseLink>. Last modified: 08/05/10.
      </p>
    </SubPageShell>
  );
}
