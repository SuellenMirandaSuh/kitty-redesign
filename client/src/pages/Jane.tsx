import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { SubPageShell } from "@/components/SubPageShell";
import { janePhotos } from "@/data/galleries";

export default function Jane() {
  return (
    <SubPageShell tag="Pets" title="3jane — My Sugar Glider" subtitle="Hear a mad sugar glider! Hear a sugar glider barking." wide>
      <p style={{ marginBottom: "1rem" }}>
        <strong>What's a Sugar Glider?</strong> They resemble North American flying squirrels but are actually classified as <em>Petaurus breviceps</em>, a small nocturnal marsupial from Australia.
      </p>
      <p>
        They measure about six inches in the body with the same length in the tail. Gray coat with a black stripe, excessive skin for gliding. They weigh 90–130 grams and can live up to 15 years in captivity.
      </p>
      <PhotoGallery images={galleryFromFolder("3jane", janePhotos, "3jane")} columns={3} />
    </SubPageShell>
  );
}
