type PhotoGalleryProps = {
  images: { src: string; alt: string }[];
  columns?: number;
};

export function PhotoGallery({ images, columns = 3 }: PhotoGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${columns === 2 ? "200px" : "160px"}, 1fr))`,
        gap: "0.75rem",
        marginTop: "1.5rem",
      }}
    >
      {images.map((img) => (
        <figure
          key={img.src}
          style={{
            margin: 0,
            borderRadius: "0.5rem",
            overflow: "hidden",
            border: "1px solid oklch(0.22 0.01 260)",
            background: "oklch(0.13 0.012 260)",
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              display: "block",
              transition: "transform 300ms var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        </figure>
      ))}
    </div>
  );
}

export function galleryFromFolder(folder: string, files: string[], altPrefix: string) {
  return files.map((file) => ({
    src: `${import.meta.env.BASE_URL}manus-storage/${folder}/${file}`,
    alt: `${altPrefix} — ${file}`,
  }));
}
