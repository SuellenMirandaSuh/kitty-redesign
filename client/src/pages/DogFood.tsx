import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { SubPageShell } from "@/components/SubPageShell";
import { dogFoodPhotos } from "@/data/galleries";

export default function DogFood() {
  return (
    <SubPageShell tag="Weird" title="Dog Food?" subtitle="More Babies — 01/07/99" wide>
      <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-display)", color: "oklch(0.72 0.19 55)", marginBottom: "1rem" }}>
        Dog Food ???
      </p>
      <p style={{ color: "oklch(0.6 0.01 260)", marginBottom: "0.5rem" }}>
        A curious page from Kit's collection of oddities.
      </p>
      <PhotoGallery images={galleryFromFolder("dog-food", dogFoodPhotos, "Dog Food")} columns={3} />
    </SubPageShell>
  );
}
