/*
 * DESIGN PHILOSOPHY: Dark Editorial — Kit's Place
 * Fundo escuro profundo (#0D0F14), tipografia branca de alto contraste,
 * acentos em laranja/âmbar (referência ao eclipse solar).
 * Fontes: Space Grotesk (display) + DM Sans (body) + Fira Code (mono)
 * Layout: coluna única com seções bem espaçadas, números de seção decorativos.
 */

import { useEffect, useRef } from "react";

// Imagens hospedadas no CDN
const ECLIPSE_IMG = "/manus-storage/eclipse_solar_6d48628f.webp";
const VCM_PATCH_IMG = "/manus-storage/vcm_patch_d0c69ed8.webp";
const KIT_PHOTO_IMG = "/manus-storage/kit_photo_96a70f66.jpg";
const LINUX_LOGO_IMG = "/manus-storage/linux_logo_4047697a.png";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function NavBar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "oklch(0.11 0.012 260 / 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.25 0.01 260)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "3.5rem" }}>
        <a
          href="#top"
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
        </a>
        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {[
            { label: "About", href: "#about" },
            { label: "Veterans", href: "#veterans" },
            { label: "Explore", href: "#explore" },
            { label: "Contact", href: "#contact" },
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
  );
}

function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "3.5rem",
      }}
    >
      {/* Eclipse image as background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={ECLIPSE_IMG}
          alt="Solar eclipse over water"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.45,
            filter: "saturate(1.3) contrast(1.1)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, oklch(0.11 0.012 260 / 0.3) 0%, oklch(0.11 0.012 260 / 0.1) 40%, oklch(0.11 0.012 260 / 0.85) 80%, oklch(0.11 0.012 260) 100%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          paddingTop: "4rem",
          paddingBottom: "6rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "oklch(0.72 0.19 55)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            opacity: 0.9,
          }}
        >
          Welcome to
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 700,
            color: "oklch(0.97 0.005 260)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          Kit's Place
        </h1>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontWeight: 300,
            color: "oklch(0.72 0.19 55)",
            letterSpacing: "0.02em",
            marginBottom: "2.5rem",
            fontStyle: "italic",
          }}
        >
          Or a Total Eclipse of.... LIFE?
        </p>
        <p
          style={{
            maxWidth: "560px",
            margin: "0 auto 3rem",
            fontSize: "1.05rem",
            color: "oklch(0.75 0.01 260)",
            lineHeight: 1.8,
          }}
        >
          So you think you have found an interesting webpage, huh?? Well, if you like weird.... This page is a reflection of me, and I have never been known to be quite 'normal'.
        </p>
        <a
          href="#about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 2rem",
            background: "oklch(0.72 0.19 55)",
            color: "oklch(0.1 0.01 260)",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "0.9rem",
            textDecoration: "none",
            borderRadius: "0.375rem",
            letterSpacing: "0.02em",
            transition: "background 150ms, transform 150ms",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.82 0.18 55)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.72 0.19 55)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          Explore the site
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3L13 8L8 13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "3rem",
            background: "linear-gradient(to bottom, oklch(0.72 0.19 55), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>
          {/* Section header */}
          <div className="reveal" style={{ position: "relative" }}>
            <span className="section-number" style={{ position: "absolute", top: "-2rem", left: "-1rem" }}>01</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="amber-sep" style={{ marginBottom: "1.25rem" }} />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                  color: "oklch(0.97 0.005 260)",
                  letterSpacing: "-0.03em",
                  marginBottom: "0.5rem",
                }}
              >
                About Kit
              </h2>
              <p style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                KIT NIX — CLEVELAND, OHIO
              </p>
            </div>
          </div>

          {/* Content grid */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* Photo card */}
            <div
              className="card-glow"
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
                aspectRatio: "3/4",
                maxWidth: "320px",
              }}
            >
              <img
                src={KIT_PHOTO_IMG}
                alt="Kit Nix"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(0.15) contrast(1.05)",
                  transition: "transform 400ms var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
            </div>

            {/* Text content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                className="card-glow"
                style={{
                  padding: "1.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "oklch(0.97 0.005 260)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Kit (Me)
                </h3>
                <p style={{ color: "oklch(0.75 0.01 260)", lineHeight: 1.8, marginBottom: "1rem" }}>
                  More pics and info about me available on the{" "}
                  <a href="insane.htm" className="link-animated">Insane Info</a> page.
                </p>
                <a
                  href="insane.htm"
                  className="link-animated"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  Insane Info →
                </a>
              </div>

              <div
                className="card-glow"
                style={{
                  padding: "1.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "oklch(0.97 0.005 260)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Places I Like to Go
                </h3>
                <p style={{ color: "oklch(0.75 0.01 260)", lineHeight: 1.8, marginBottom: "1rem" }}>
                  A curated list of places and destinations that hold a special place in Kit's heart.
                </p>
                <a
                  href="Places.html"
                  className="link-animated"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  Explore Places →
                </a>
              </div>

              <div
                className="card-glow"
                style={{
                  padding: "1.75rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "oklch(0.97 0.005 260)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Wayne Nix — Taxidermist
                </h3>
                <p style={{ color: "oklch(0.75 0.01 260)", lineHeight: 1.8 }}>
                  My husband, Wayne, is a taxidermist. If you need anything (or anyone?) stuffed, look him up:
                </p>
                <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <span style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    Facebook: <span style={{ color: "oklch(0.72 0.19 55)" }}>Wayne Nix</span>
                  </span>
                  <span style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    eBay: <span style={{ color: "oklch(0.72 0.19 55)" }}>Taxidermy_Connection</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VeteransSection() {
  return (
    <section
      id="veterans"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.13 0.012 260)",
        borderTop: "1px solid oklch(0.2 0.01 260)",
        borderBottom: "1px solid oklch(0.2 0.01 260)",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div className="reveal" style={{ position: "relative", marginBottom: "3.5rem" }}>
          <span className="section-number" style={{ position: "absolute", top: "-2rem", left: "-1rem" }}>02</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="amber-sep" style={{ marginBottom: "1.25rem" }} />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "oklch(0.97 0.005 260)",
                letterSpacing: "-0.03em",
                marginBottom: "0.5rem",
              }}
            >
              Veterans & Service
            </h2>
            <p style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
              HONORING THOSE WHO SERVED
            </p>
          </div>
        </div>

        {/* VCM Feature card */}
        <div
          className="reveal card-glow"
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            marginBottom: "2rem",
          }}
        >
          {/* Patch image */}
          <div
            style={{
              background: "oklch(0.1 0.01 260)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2.5rem",
              minHeight: "240px",
            }}
          >
            <a href="http://www.billsbunker.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={VCM_PATCH_IMG}
                alt="Vung Chua Mountain Patch"
                style={{
                  width: "160px",
                  height: "auto",
                  filter: "drop-shadow(0 4px 24px oklch(0.72 0.19 55 / 0.2))",
                  transition: "transform 300ms var(--ease-out), filter 300ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
                  (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 4px 32px oklch(0.72 0.19 55 / 0.4))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 4px 24px oklch(0.72 0.19 55 / 0.2))";
                }}
              />
            </a>
          </div>

          {/* Text */}
          <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "oklch(0.97 0.005 260)",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                <a href="http://www.billsbunker.com/" target="_blank" rel="noopener noreferrer" className="link-animated">
                  Vung Chua Mountain
                </a>
              </h3>
              <p style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                VISIT BILL'S BUNKER
              </p>
            </div>

            <p style={{ color: "oklch(0.75 0.01 260)", lineHeight: 1.8 }}>
              While there, read about{" "}
              <a href="PamelaSynopsis.html" className="link-animated" style={{ fontWeight: 500 }}>
                2nd Lt. Pamela Donovan
              </a>
              , who gave up her Irish citizenship, became a US citizen and a nurse and volunteered in the US Army Nurse Corp and Viet Nam to help our soldiers.
            </p>

            <div
              style={{
                padding: "1.25rem",
                background: "oklch(0.72 0.19 55 / 0.08)",
                borderLeft: "3px solid oklch(0.72 0.19 55)",
                borderRadius: "0 0.375rem 0.375rem 0",
              }}
            >
              <p style={{ color: "oklch(0.85 0.01 260)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Check out{" "}
                <a href="http://www.billsbunker.com/VFI" target="_blank" rel="noopener noreferrer" className="link-animated" style={{ fontWeight: 600 }}>
                  Veterans and Friends, Inc.
                </a>
                , our nonprofit organization that helps Veterans, Service Men/Women and families in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreSection() {
  const links = [
    {
      title: "Kit's Collection of Quotes",
      desc: "A personal collection of memorable and meaningful quotes gathered over the years.",
      href: "quotes.htm",
      tag: "QUOTES",
    },
    {
      title: "Blasts From The Past",
      desc: "Check out the following from days gone by.",
      href: "BlastPast.html",
      tag: "NOSTALGIA",
    },
    {
      title: "Dog Food?",
      desc: "A curious page from Kit's collection of oddities.",
      href: "DogFood.html",
      tag: "WEIRD",
    },
    {
      title: "3jane — My Sugar Glider",
      desc: "Meet 3jane, Kit's beloved sugar glider.",
      href: "3jane.htm",
      tag: "PETS",
    },
    {
      title: "Lakeview Cemetery",
      desc: "Pics of wonderful Lakeview Cemetery, one of my homes away from home. (8-12-99)",
      href: "lakeview/lakeview.html",
      tag: "PHOTOGRAPHY",
    },
    {
      title: "Kritters",
      desc: "Visit the Kritters page and see mine and my friend's pets.",
      href: "kritters/kritters.html",
      tag: "PETS",
    },
    {
      title: "Wacko Web Sights I Like",
      desc: "Including some of my friends pages. (Caution, they are no more normal than I am!)",
      href: "wackoweb.htm",
      tag: "LINKS",
    },
    {
      title: "2600 Cleveland",
      desc: "Please visit the 2600 Cleveland website.",
      href: "2600",
      tag: "TECH",
    },
    {
      title: "THIS is why I HATE winter",
      desc: "This is why I HATE winter in Cleveland, Ohio. (Winter, 1999)",
      href: "winter.html",
      tag: "CLEVELAND",
    },
    {
      title: "ICQ Me?",
      desc: "Page me, Email me, etc. via ICQ. Learn more about ICQ here also.",
      href: "icq.htm",
      tag: "CONTACT",
    },
  ];

  return (
    <section id="explore" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container">
        {/* Section header */}
        <div className="reveal" style={{ position: "relative", marginBottom: "3.5rem" }}>
          <span className="section-number" style={{ position: "absolute", top: "-2rem", left: "-1rem" }}>03</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="amber-sep" style={{ marginBottom: "1.25rem" }} />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "oklch(0.97 0.005 260)",
                letterSpacing: "-0.03em",
                marginBottom: "0.5rem",
              }}
            >
              Explore the Site
            </h2>
            <p style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
              PAGES &amp; COLLECTIONS
            </p>
          </div>
        </div>

        {/* Links grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="reveal card-glow"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transitionDelay: `${i * 40}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "oklch(0.97 0.005 260)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.title}
                </h3>
                <span
                  style={{
                    flexShrink: 0,
                    padding: "0.2rem 0.5rem",
                    background: "oklch(0.72 0.19 55 / 0.12)",
                    color: "oklch(0.72 0.19 55)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    borderRadius: "0.25rem",
                    border: "1px solid oklch(0.72 0.19 55 / 0.2)",
                  }}
                >
                  {link.tag}
                </span>
              </div>
              <p
                style={{
                  color: "oklch(0.65 0.01 260)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                {link.desc}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "oklch(0.72 0.19 55)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "0.8rem",
                }}
              >
                Visit page
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChocolateQuiz() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        background: "oklch(0.13 0.012 260)",
        borderTop: "1px solid oklch(0.2 0.01 260)",
        borderBottom: "1px solid oklch(0.2 0.01 260)",
      }}
    >
      <div className="container">
        <div
          className="reveal"
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "oklch(0.72 0.19 55)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Personality Quiz Result
          </p>
          <div
            style={{
              padding: "2.5rem",
              background: "oklch(0.15 0.012 260)",
              border: "1px solid oklch(0.72 0.19 55 / 0.25)",
              borderRadius: "0.75rem",
              boxShadow: "0 0 40px oklch(0.72 0.19 55 / 0.06)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "oklch(0.72 0.19 55)",
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              I am Chocolate Flavoured.
            </h3>
            <p
              style={{
                color: "oklch(0.75 0.01 260)",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              I am sweet and a little bit naughty. I am one of the few clinically proven aphrodisiacs. Sometimes I can seem a little hard, but show warmth and I soon melt.
            </p>
            <a
              href="https://www.whatflavourareyou.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-animated"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              What Flavour Are You? →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinuxSection() {
  return (
    <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container">
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            maxWidth: "480px",
            margin: "0 auto",
            padding: "2rem",
            background: "oklch(0.15 0.012 260)",
            border: "1px solid oklch(0.25 0.01 260)",
            borderRadius: "0.75rem",
          }}
        >
          <a href="http://counter.li.org/" target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0 }}>
            <img
              src={LINUX_LOGO_IMG}
              alt="Linux Counter"
              style={{
                width: "64px",
                height: "auto",
                filter: "brightness(0.9) contrast(1.1)",
                transition: "filter 200ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = "brightness(1.1) contrast(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = "brightness(0.9) contrast(1.1)";
              }}
            />
          </a>
          <div>
            <p style={{ color: "oklch(0.75 0.01 260)", lineHeight: 1.7, marginBottom: "0.5rem" }}>
              Proud Linux user. Join the community and register yourself.
            </p>
            <a
              href="http://counter.li.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-animated"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              Register as a Linux user →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "oklch(0.13 0.012 260)",
        borderTop: "1px solid oklch(0.2 0.01 260)",
      }}
    >
      <div className="container">
        <div className="reveal" style={{ position: "relative", marginBottom: "3rem" }}>
          <span className="section-number" style={{ position: "absolute", top: "-2rem", left: "-1rem" }}>04</span>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="amber-sep" style={{ marginBottom: "1.25rem" }} />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                color: "oklch(0.97 0.005 260)",
                letterSpacing: "-0.03em",
                marginBottom: "0.5rem",
              }}
            >
              Get in Touch
            </h2>
            <p style={{ color: "oklch(0.6 0.01 260)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
              ALWAYS UNDER CONSTRUCTION
            </p>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <p style={{ color: "oklch(0.75 0.01 260)", lineHeight: 1.8, fontSize: "1rem" }}>
            This page is ALWAYS under construction so please be patient and stop by often and check the progress. Please feel free to e-mail me with any comments or suggestions. Insults and criticisms can be kept to yourself!
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a
              href="mailto:kit@kitty.org"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "oklch(0.72 0.19 55)",
                color: "oklch(0.1 0.01 260)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                borderRadius: "0.375rem",
                transition: "background 150ms, transform 150ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.82 0.18 55)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.72 0.19 55)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1 5L8 9.5L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              kit@kitty.org
            </a>

            <a
              href="icq.htm"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "transparent",
                color: "oklch(0.72 0.19 55)",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                borderRadius: "0.375rem",
                border: "1px solid oklch(0.72 0.19 55 / 0.4)",
                transition: "border-color 150ms, background 150ms, transform 150ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.72 0.19 55)";
                (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.72 0.19 55 / 0.08)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.72 0.19 55 / 0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              ICQ Me?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const revisions = [
    "February 22, 2005",
    "March 2, 2008",
    "December 22, 2008",
    "October 2, 2011",
    "February 15, 2012",
    "March 20, 2023",
  ];

  return (
    <footer
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTop: "1px solid oklch(0.2 0.01 260)",
        background: "oklch(0.1 0.012 260)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "oklch(0.72 0.19 55)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Kit's Place
            </p>
            <p
              style={{
                color: "oklch(0.5 0.01 260)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
              }}
            >
              Copyright 12/97, Kit Nix.
            </p>
          </div>

          {/* Revision history */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "oklch(0.5 0.01 260)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Revision History
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {revisions.map((rev) => (
                <span
                  key={rev}
                  style={{
                    padding: "0.2rem 0.6rem",
                    background: "oklch(0.15 0.01 260)",
                    color: "oklch(0.55 0.01 260)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    borderRadius: "0.25rem",
                    border: "1px solid oklch(0.22 0.01 260)",
                  }}
                >
                  {rev}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useReveal();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "oklch(0.11 0.012 260)",
        color: "oklch(0.96 0.005 260)",
      }}
    >
      <NavBar />
      <Hero />
      <AboutSection />
      <VeteransSection />
      <ExploreSection />
      <ChocolateQuiz />
      <LinuxSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
