import Link from "next/link";
import type { ArticleData } from "@/data/articles";

interface ArticleCardProps {
  article: ArticleData;
  variant?: "featured" | "small";
}

export function ArticleCard({ article, variant = "small" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <div role="listitem" className="featured-blog-card-item w-dyn-item">
        <Link
          aria-label={article.title}
          href={`/blog/${article.slug}`}
          className="blog-card is-featured w-inline-block"
        >
          <div className="blog-card-media is-featured">
            <img
              alt={article.heroAlt}
              loading="lazy"
              src={article.heroImage}
              className="blog-card-image"
            />
            <div className="blog-gradient-featured"></div>
          </div>
          <div className="blog-card-content is-featured">
            <h2 className="heading is-medium">{article.title}</h2>
            <div className="blog-card-details">
              <div className="blog-detail-flex">
                <p className="label-text">Thème :</p>
                <p className="label-text is-bold">{article.category}</p>
              </div>
              <div className="blog-detail-flex">
                <p className="label-text">Lecture :</p>
                <p className="label-text">{article.readingTime}</p>
              </div>
            </div>
            <div className="content-background"></div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div role="listitem" className="blog-card-item w-dyn-item">
      <Link
        aria-label={article.title}
        href={`/blog/${article.slug}`}
        className="blog-card-small w-inline-block"
      >
        <div className="blog-card-media-small">
          <img
            alt={article.heroAlt}
            loading="lazy"
            src={article.heroImage}
            className="blog-card-image"
          />
        </div>
        <div className="blog-card-content">
          <h2 className="heading is-small">{article.title}</h2>
          <div className="blog-card-about">
            <div className="blog-card-wrap">
              <div className="blog-card-details">
                <div className="blog-detail-flex">
                  <p className="label-text">{article.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-card-small-background"></div>
      </Link>
    </div>
  );
}
