import Link from "next/link";
import type { SoinData } from "@/data/soins";

interface SoinCardProps {
  soin: SoinData;
}

export function SoinCard({ soin }: SoinCardProps) {
  return (
    <div role="listitem" className="condition-item w-dyn-item">
      <div className="condition-item-image">
        <img
          src={soin.cardImage}
          loading="lazy"
          alt={soin.title}
          className="cover-image"
        />
      </div>
      <h2 className="heading is-small">{soin.title}</h2>
      <p className="paragraph is-small">{soin.accroche}</p>
      <div className="related-treatments w-dyn-list">
        <div role="list" className="related-treatments-list w-dyn-items">
          {soin.relatedLinks.map((link) => (
            <div
              key={`${soin.slug}-${link.label}`}
              role="listitem"
              className="related-treatment-item w-dyn-item"
            >
              <Link
                aria-label={link.label}
                href={link.href}
                className="related-treatment-link w-inline-block"
              >
                <img
                  src={link.icon}
                  loading="lazy"
                  alt={link.label}
                  className="related-treatment-icon"
                />
                <p className="paragraph is-small">{link.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
