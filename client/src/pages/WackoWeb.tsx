import { ProseLink, SubPageShell } from "@/components/SubPageShell";
import { routes } from "@/lib/routes";
import { Link } from "wouter";

const links = [
  { name: "Veterans and Friends Inc.", href: "http://www.billsbunker.com/VFI", desc: "Help us help those in need!" },
  { name: "Bill's Bunker", href: "http://www.billsbunker.com/", desc: "Very Cool Vietnam Veterans site. Great site to listen to Viet Nam Era Music." },
  { name: "Lake View Cemetery", href: routes.lakeviewCemetery, desc: "One of my favorite places to spend hours of my time that I don't consider wasted.", internal: true },
  { name: "BOFH Rocks!!", href: "https://bofh.org.uk/", desc: "If you are not familiar with the BOFH, you gotta check this out." },
  { name: "User Friendly", href: "https://www.userfriendly.org/", desc: "The chronicle of Columbia Internet, the friendliest, hardest-working and most neurotic little ISP in the world." },
];

export default function WackoWeb() {
  return (
    <SubPageShell
      tag="Links"
      title="Wacko Web Sights I Like"
      subtitle="Including some of my friends pages. (Caution, they are no more normal than I am!)"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {links.map((link) => (
          <div
            key={link.name}
            style={{
              padding: "1.25rem",
              background: "oklch(0.13 0.012 260)",
              borderRadius: "0.5rem",
              border: "1px solid oklch(0.22 0.01 260)",
            }}
          >
            {link.internal ? (
              <Link href={link.href} className="link-animated" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem" }}>
                {link.name}
              </Link>
            ) : (
              <ProseLink href={link.href}>{link.name}</ProseLink>
            )}
            <p style={{ margin: "0.4rem 0 0", color: "oklch(0.65 0.01 260)", fontSize: "0.95rem" }}>{link.desc}</p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1.75rem", color: "oklch(0.65 0.01 260)" }}>
        I have to mention <strong>EOL, End of The Line</strong>. This was where my good friend Jubal E. Harshaw first introduced me to talkers. I will never forget End of the Line or the dear friends it brought me.
      </p>
      <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "oklch(0.5 0.01 260)" }}>
        Key Largo talker (telnet kitty.org port 3000) — no longer in operation.
      </p>
    </SubPageShell>
  );
}
