import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { SubPageShell } from "@/components/SubPageShell";
import { krittersPhotos } from "@/data/galleries";

const labels: Record<string, string> = {
  "cateyes.gif": "Kit's Kitties",
  "womintro.jpg": "Woscar The Wombat — Mascot of Key Largo",
  "woscar.jpg": "Woscar",
  "wombat.jpg": "Wombat",
  "leon.jpg": "Leon / Mask",
  "mask.jpg": "Mask",
  "leo.jpg": "Leo",
  "bez.jpg": "Bez — FA & Jubal's",
  "mp.jpg": "Marian Precious",
  "mickey.jpg": "Mickey",
  "cricket.jpg": "Cricket",
  "FEEDME2.jpg": "Feed Me!",
  "feedme3.jpg": "Feed Me!",
};

export default function Kritters() {
  const images = krittersPhotos.map((file) => ({
    src: `${import.meta.env.BASE_URL}manus-storage/kritters/${file}`,
    alt: labels[file] ?? `Kritter — ${file}`,
  }));

  return (
    <SubPageShell tag="Pets" title="Kritters" subtitle="Or, Is it time for your medication or mine?" wide>
      <p style={{ marginBottom: "1rem" }}>Mine and my friends' pets:</p>
      <ul style={{ paddingLeft: "1.25rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.35rem", fontSize: "0.9rem", color: "oklch(0.65 0.01 260)" }}>
        {Object.values(labels).map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
      <PhotoGallery images={images} columns={3} />
    </SubPageShell>
  );
}
