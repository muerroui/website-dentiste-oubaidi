import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { ArticleCard } from "@/components/ui/ArticleCard";

export function BlogPreviewSection() {
  const [featured, ...others] = ARTICLES_DATA;

  return (
    <section className="section light-strong">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <h2 className="heading">Articles &amp; conseils dentaires</h2>
          <Link href="/blog" className="large-link-block w-inline-block">
            <div className="large-link-text">Lire tous les guides</div>
            <img
              loading="lazy"
              src="/assets/caliora/69d91148a58b88b54b0d9a1f_arrow-dark-5.svg"
              alt=""
              className="large-link-icon"
            />
            <div className="large-link-line"></div>
          </Link>
        </div>
        <div className="spacing w-variant-ece6450b-87b0-9820-ed54-1d28ab1173ad"></div>
        <div className="featured-blog-wrap">
          <div className="featured-blog-card w-dyn-list">
            <div role="list" className="featured-blog-card-list w-dyn-items">
              {featured && <ArticleCard article={featured} variant="featured" />}
            </div>
          </div>
          <div className="featured-blog-list">
            <div className="blog-cards-wrap w-dyn-list">
              <div role="list" className="blog-cards-list w-dyn-items">
                {others.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    variant="small"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
