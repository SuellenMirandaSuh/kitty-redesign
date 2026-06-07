import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { ProseSection, SubPageShell } from "@/components/SubPageShell";
import { daffodilPhotos, harleyPhotos, louiePhotos } from "@/data/galleries";

export default function BlastsFromThePast() {
  return (
    <SubPageShell tag="Nostalgia" title="Blasts From The Past" subtitle="Check out the following from days gone by" wide>
      <ProseSection title="Daffodil Sunday 2006 — Lake View Cemetery">
        <PhotoGallery images={galleryFromFolder("daffodil", daffodilPhotos, "Daffodil Sunday")} columns={4} />
      </ProseSection>

      <ProseSection title="The 20th Louie Run (2003)">
        <p style={{ marginBottom: "0.75rem", fontSize: "0.9rem", color: "oklch(0.6 0.01 260)" }}>Taken May 4, 2003 — best viewed in full screen mode.</p>
        <PhotoGallery images={galleryFromFolder("louie2003", louiePhotos, "Louie Run")} columns={3} />
      </ProseSection>

      <ProseSection title="South East Harley Davidson Corn Roast 1999">
        <PhotoGallery images={galleryFromFolder("harley", harleyPhotos, "Harley Corn Roast")} columns={4} />
      </ProseSection>
    </SubPageShell>
  );
}
