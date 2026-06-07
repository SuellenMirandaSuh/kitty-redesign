import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { SubPageShell } from "@/components/SubPageShell";
import { placesPhotos } from "@/data/galleries";

export default function Places() {
  const places = [
    { name: "Southeast Gears & Cheers", desc: "Cowboy Food and Drink's entertainment schedule." },
    { name: "Zeppe's Tavern and Pizzaria", desc: "Newbury (87 & Auburn Rd.) — Bands on Wednesdays and Saturdays!" },
    { name: "A friend's place in Hudson", desc: "Lots of \"open mic\" opportunities and jam nights! Bands on the weekends." },
  ];

  return (
    <SubPageShell tag="Cleveland" title="Places I Like to Go" subtitle="Entertainment & hangouts">
      <p style={{ marginBottom: "1.5rem" }}>Check it out! Entertainment too!</p>
      <PhotoGallery images={galleryFromFolder("places", placesPhotos, "Place")} columns={3} />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
        {places.map((place) => (
          <div
            key={place.name}
            style={{
              padding: "1.25rem",
              background: "oklch(0.13 0.012 260)",
              borderRadius: "0.5rem",
              border: "1px solid oklch(0.22 0.01 260)",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "oklch(0.72 0.19 55)", marginBottom: "0.4rem" }}>
              {place.name}
            </h3>
            <p style={{ margin: 0, color: "oklch(0.7 0.01 260)" }}>{place.desc}</p>
          </div>
        ))}
      </div>
    </SubPageShell>
  );
}
