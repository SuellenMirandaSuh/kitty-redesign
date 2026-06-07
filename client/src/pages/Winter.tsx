import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { ProseLink, SubPageShell } from "@/components/SubPageShell";
import { winterPhotos } from "@/data/galleries";

export default function Winter() {
  return (
    <SubPageShell tag="Cleveland" title="THIS is why I HATE winter" subtitle="Cleveland, Ohio — Winter, 1999" wide>
      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        This is why I hate winter in Cleveland, Ohio!!
      </p>
      <PhotoGallery images={galleryFromFolder("winter", winterPhotos, "Cleveland winter")} columns={3} />
      <p style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
        <ProseLink href="https://kitty.org/winter.html">Spud's World's response</ProseLink> · Kit's rebuttal
      </p>
    </SubPageShell>
  );
}
