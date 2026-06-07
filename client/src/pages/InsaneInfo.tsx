import { galleryFromFolder, PhotoGallery } from "@/components/PhotoGallery";
import { ProseLink, ProseSection, SubPageShell } from "@/components/SubPageShell";
import { familyPhotos, genePhotos, insanePhotos, kittensPhotos } from "@/data/galleries";
import { routes } from "@/lib/routes";
import { storageFolder } from "@/lib/images";
import { Link } from "wouter";

export default function InsaneInfo() {
  return (
    <SubPageShell tag="About" title="Insane Info" subtitle="More pics, info on me" wide>
      <p style={{ marginBottom: "1.5rem", fontStyle: "italic", color: "oklch(0.65 0.01 260)" }}>
        I've never been too good talking about myself (because no one probably wants to hear about it anyway, hehe) but here goes....
      </p>

      <ProseSection title="Photos">
        <PhotoGallery images={galleryFromFolder("insane", insanePhotos, "Kit")} columns={3} />
      </ProseSection>

      <ProseSection title="Work & Tech">
        <p>
          I keep quite busy with my own small business of repairing, upgrading and building systems. Ours is probably one of the few households in America that has LAN. Thanks to my very dear friend Gene, the server is now a Linux machine.
        </p>
        <PhotoGallery images={galleryFromFolder("gene", genePhotos, "Gene")} columns={3} />
      </ProseSection>

      <ProseSection title="Family & Friends">
        <PhotoGallery images={galleryFromFolder("family", familyPhotos, "Family")} columns={3} />
        <p style={{ marginTop: "1rem" }}>
          <Link href={routes.kritters} className="link-animated">Family & Friends Picture Album</Link> — check back often for updates.
        </p>
        <PhotoGallery images={galleryFromFolder("kittens", kittensPhotos, "Bijou's kittens")} columns={3} />
        <p style={{ marginTop: "1rem" }}>
          <Link href={routes.jane} className="link-animated">3jane my sugar glider</Link>
        </p>
      </ProseSection>

      <ProseSection title="Motorcycles">
        <p>
          A Red 1981 440 Kawasaki LTD I call "Old Red" — and a Blue 1982 Kawasaki 440 LTD I call "New Blue". I've wanted an 883 Hugger since I was 13. Hey, I'm on two wheels and in the wind, can't complain too much.
        </p>
        <img
          src={storageFolder("insane", "kita.jpg")}
          alt="Kit on motorcycle"
          style={{ marginTop: "1rem", maxWidth: "280px", borderRadius: "0.5rem", border: "1px solid oklch(0.22 0.01 260)" }}
        />
      </ProseSection>

      <ProseSection title="Tattoos">
        <p>My Iris / Left Shoulder · Witchy Woman / On my upper left thigh.</p>
        <PhotoGallery images={galleryFromFolder("insane", ["iris2.jpg", "tattoo2.jpg"], "Tattoo")} columns={2} />
      </ProseSection>

      <ProseSection title="Spirituality">
        <p>
          I am pagan, leaning more toward druidism. For those interested:{" "}
          <ProseLink href="https://www.druidry.org/">The Druid Grove</ProseLink>.
        </p>
      </ProseSection>

      <ProseSection title="Favorite Authors">
        <p>
          My favorite bookstore: <strong>Mac's Backs Paperbacks</strong>, 1820 Coventry Rd., Cleveland Hts., Ohio — tell Suzanne that Kit sent you!
        </p>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li><ProseLink href="https://www.brucesterling.com/">Bruce Sterling</ProseLink></li>
          <li>Tom Robbins · Anaïs Nin · Richard Bach · J.R.R. Tolkien</li>
        </ul>
      </ProseSection>
    </SubPageShell>
  );
}
