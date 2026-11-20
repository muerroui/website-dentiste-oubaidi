import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import { SocialProof } from "@/components/ui/SocialProof";

interface HeroPrimaryProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  exploreHref?: string;
  socialProofLabel?: string;
  showAvatars?: boolean;
  fiveStars?: boolean;
  variantClass?: string;
}

export function HeroPrimary({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  exploreHref,
  socialProofLabel,
  showAvatars = true,
  fiveStars = true,
  variantClass = "",
}: HeroPrimaryProps) {
  return (
    <div
      className={`hero-primary${variantClass ? ` ${variantClass}` : ""}`}
    >
      <div aria-label="Image clinique" className="hero-primary-media">
        <div className="hero-primary-overlay"></div>
        <div className="hero-primary-bg">
          <img
            fetchPriority="high"
            alt={imageAlt}
            src={imageSrc}
            loading="eager"
            className="hero-primary-image"
          />
        </div>
      </div>
      <div className="hero-primary-content">
        <div className="hero-title-wrap">
          <div className="hero-primary-title-width">
            <h1 className="heading is-hero-primary-title">{title}</h1>
          </div>
          {socialProofLabel ? (
            <SocialProof
              label={socialProofLabel}
              showAvatars={showAvatars}
              fiveStars={fiveStars}
            />
          ) : (
            <SocialProof />
          )}
        </div>
        <div className="hero-primary-about">
          <div className="hero-primary-about-text">
            <p className="paragraph is-large">{description}</p>
          </div>
          {(exploreHref || (ctaLabel && ctaHref)) && (
            <div className="hero-primary-actions">
              {exploreHref && (
                <div className="hero-button-explore">
                  <a
                    href={exploreHref}
                    className="button-explore w-inline-block"
                    aria-label="Explorer nos soins"
                  >
                    <img
                      loading="lazy"
                      src="/assets/caliora/69d91148a58b88b54b0d9a1d_arrow-dark-4.svg"
                      alt=""
                      className="button-icon is-large"
                    />
                  </a>
                </div>
              )}
              {ctaLabel && ctaHref && (
                <CtaButton label={ctaLabel} href={ctaHref} />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="hero-primary-gradient"></div>
    </div>
  );
}

interface HeroStatItem {
  label: string;
  value: string;
}

interface HeroStatsProps {
  badgeLeft: string;
  badgeRight: string;
  title: string;
  stats: HeroStatItem[];
  imageSrc: string;
  imageAlt: string;
}

export function HeroStats({
  badgeLeft,
  badgeRight,
  title,
  stats,
  imageSrc,
  imageAlt,
}: HeroStatsProps) {
  return (
    <div className="hero-stats">
      <div className="hero-stats-layout">
        <div className="hero-stats-title">
          <div className="label">
            <div className="label-wrap w-variant-51d51728-fe69-730d-e99c-5fd5218dc070">
              <div className="label-text w-variant-51d51728-fe69-730d-e99c-5fd5218dc070">
                {badgeLeft}
              </div>
            </div>
            <div className="label-wrap w-variant-51d51728-fe69-730d-e99c-5fd5218dc070 is-2nd">
              <div className="label-text w-variant-51d51728-fe69-730d-e99c-5fd5218dc070">
                {badgeRight}
              </div>
            </div>
          </div>
          <h1 className="heading is-xlarge">{title}</h1>
        </div>

        <div className="hero-stats-cms">
          <div className="hero-stats-cms-list">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat-item">
                <div className="stat-card w-variant-4dad2945-b246-408f-a3cc-07ac85644840">
                  <div className="label-text">{stat.label}</div>
                  <div className="stat-card-line">
                    <div className="stat-line-default"></div>
                    <div className="stat-line-animation w-variant-4dad2945-b246-408f-a3cc-07ac85644840"></div>
                  </div>
                  <div className="large-stat-title w-variant-4dad2945-b246-408f-a3cc-07ac85644840">
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-stats-bg">
        <div className="hero-stats-bg-overlay"></div>
        <div className="hero-stats-bg-gradient"></div>
        <img
          alt={imageAlt}
          src={imageSrc}
          loading="eager"
          fetchPriority="high"
          className="cover-image in-treatment-page"
        />
      </div>
    </div>
  );
}

interface HeroSplitProps {
  badgeLeft: string;
  badgeRight: string;
  title: string;
  summary: string;
  images: [string, string, string, string];
  ctaHref?: string;
}

export function HeroSplit({
  badgeLeft,
  badgeRight,
  title,
  summary,
  images,
  ctaHref = "/contact-acces-kenitra",
}: HeroSplitProps) {
  return (
    <div className="hero-split">
      <div className="hero-split-layout">
        <div className="hero-split-content">
          <div className="hero-split-title">
            <div className="label">
              <div className="label-wrap w-variant-51d51728-fe69-730d-e99c-5fd5218dc070">
                <div className="label-text w-variant-51d51728-fe69-730d-e99c-5fd5218dc070">
                  {badgeLeft}
                </div>
              </div>
              <div className="label-wrap w-variant-51d51728-fe69-730d-e99c-5fd5218dc070 is-2nd">
                <div className="label-text w-variant-51d51728-fe69-730d-e99c-5fd5218dc070">
                  {badgeRight}
                </div>
              </div>
            </div>
            <h1 className="heading-fluid is-small">{title}</h1>
          </div>
        </div>
        <div className="hero-split-media">
          <div aria-label="Hero images" className="hero-split-images">
            {images.map((img, idx) => (
              <img
                key={`${img}-${idx}`}
                src={img}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 || idx === 3 ? "high" : undefined}
                alt={`${title} - Mimosa Smile Kénitra`}
                className="hero-split-image"
              />
            ))}
          </div>
        </div>
        <div className="hero-split-content is-2nd">
          <div className="hero-split-max">
            <p className="paragraph">{summary}</p>
            <div className="buttons">
              <a
                href="#details"
                className="button-explore w-inline-block"
                aria-label="Voir les détails"
              >
                <img
                  loading="lazy"
                  src="/assets/caliora/69d91148a58b88b54b0d9a1d_arrow-dark-4.svg"
                  alt=""
                  className="button-icon is-large"
                />
              </a>
              <Link href={ctaHref} className="button w-inline-block">
                <div className="button-text">Prendre rendez-vous</div>
                <div className="button-icon-wrap">
                  <img
                    src="/assets/caliora/69dfdbea6df3e2a88f38ce35_arrow-brand-light.svg"
                    loading="lazy"
                    alt=""
                    className="button-icon"
                  />
                </div>
                <div className="button-background-animation"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-split-top-gradient"></div>
      <div className="hero-split-bg">
        <div className="hero-split-bg-overlay"></div>
        <img
          src="/assets/caliora/69d91148a58b88b54b0d9c10_c870240ec4e17eaffbb204b160df727c_bg-mesh-gradient.avif"
          loading="lazy"
          alt=""
          className="cover-image"
        />
      </div>
    </div>
  );
}
