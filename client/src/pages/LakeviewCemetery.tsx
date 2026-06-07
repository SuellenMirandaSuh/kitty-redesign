import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { ProseLink, ProseSection, SubPageShell } from "@/components/SubPageShell";
import { lakeviewPhotos } from "@/data/galleries";

export default function LakeviewCemetery() {
  return (
    <SubPageShell tag="Photography" title="Lakeview Cemetery" subtitle="One of my homes away from home — 8-12-99" wide>
      <ProseSection title="Darkstar & The Dam">
        <p>Photos of Darkstar, The Dam, and Kit at one of Cleveland's most beautiful and historic cemeteries.</p>
      </ProseSection>

      <ProseSection title="Elliot Ness">
        <p>
          Yes, <strong>THE Elliot Ness</strong> — Safety Director of Cleveland, 1935–1942. The "torso murders" aka "Kingsbury Run murders" took place during his term. These murders were never solved.
        </p>
      </ProseSection>

      <PhotoGallery images={galleryFromFolder("lakeview", lakeviewPhotos, "Lakeview Cemetery")} columns={4} />

      <ProseSection title="Recommended Reading">
        <p>
          <em>The Flesh, The Blood and The Fire</em> by S.A. Swinarski — available at Mac's Backs Paperbacks, 1820 Coventry Rd. Ask for Suzanne!
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          <ProseLink href="https://www.crimelibrary.com/">Crime Library: Kingsbury Run Murders</ProseLink>
        </p>
      </ProseSection>
    </SubPageShell>
  );
}
