"use client";

import { useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
}

export function LightboxGallery({ images }: LightboxGalleryProps) {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="section dark-base">
      <div className="container">
        <div className="gallery-wrap w-dyn-list">
          <div role="list" className="gallery-grid is-large w-dyn-items">
            {images.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                role="listitem"
                className="gallery-item is-large w-dyn-item w-dyn-repeater-item"
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className="lightbox-link w-inline-block w-lightbox"
                  style={{ border: 0, padding: 0, width: "100%", textAlign: "left" }}
                  aria-label={`Agrandir : ${img.alt}`}
                >
                  <img
                    src={img.src}
                    loading="lazy"
                    alt={img.alt}
                    className="lightbox-image"
                  />
                  <img
                    src="/assets/caliora/69d91148a58b88b54b0d9c68_71068dd379c144edc271fd1bb61d7613_open-in-full.svg"
                    loading="lazy"
                    alt="Agrandir"
                    className="lightbox-icon"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-mesh-bg">
        <div className="section-mesh-bg-overlay"></div>
        <img
          loading="lazy"
          src="/assets/caliora/69d91148a58b88b54b0d9c10_c870240ec4e17eaffbb204b160df727c_bg-mesh-gradient.avif"
          alt=""
          className="cover-image"
        />
      </div>

      {activeImage && (
        <div
          className="caliora-lightbox-modal is-open"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="caliora-lightbox-close"
            aria-label="Fermer"
            onClick={() => setActiveImage(null)}
          >
            &times;
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
