import { ProseLink, ProseSection, SubPageShell } from "@/components/SubPageShell";

export default function Icq() {
  return (
    <SubPageShell tag="Contact" title="ICQ Me?" subtitle="Page me, Email me, etc. via ICQ">
      <ProseSection>
        <p>
          If you have a running ICQ client you can Chat Me, ICQ-Me and/or Add Me to your contact list.
        </p>
        <p style={{ marginTop: "1rem" }}>
          If you don't have an ICQ client you can press the Page Me button to send an ICQ message through the Personal Communication Center, or use Email Notify to send an e-mail and notify me by ICQ.
        </p>
      </ProseSection>

      <ProseSection title="Prefer email?">
        <p>
          The easiest way to reach Kit today:{" "}
          <ProseLink href="mailto:kit@kitty.org">kit@kitty.org</ProseLink>
        </p>
      </ProseSection>

      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "oklch(0.55 0.01 260)" }}>
        Legacy ICQ panel from the <ProseLink href="https://kitty.org/icq.htm">original page</ProseLink> — ICQ is no longer widely used, but the spirit of staying connected lives on.
      </p>
    </SubPageShell>
  );
}
