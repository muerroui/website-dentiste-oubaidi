interface SocialProofProps {
  label?: string;
  showAvatars?: boolean;
  fiveStars?: boolean;
}

export function SocialProof({
  label = "Plébiscité par nos patients au Quartier Mimosa",
  showAvatars = true,
  fiveStars = true,
}: SocialProofProps) {
  return (
    <div className="hero-social-proof">
      {showAvatars && (
        <div className="hero-social-proof-images">
          <img
            src="/assets/caliora/69e0bb80a5a4f33bc8262728_after-3.avif"
            loading="lazy"
            alt="Sourire patient"
            className="hero-social-proof-image"
          />
          <img
            src="/assets/caliora/69e0bb755d17e5ccd1940839_after-2.avif"
            loading="lazy"
            alt="Sourire patient"
            className="hero-social-proof-image is-2nd"
          />
          <img
            src="/assets/caliora/69e0bb758c7c8a3ff522b4e9_after-1.avif"
            loading="lazy"
            alt="Sourire patient"
            className="hero-social-proof-image is-3rd"
          />
        </div>
      )}
      <div className="hero-social-proof-content">
        <p className="label-text">{label}</p>
        <div className="hero-social-proof-icons">
          <img
            src="/assets/caliora/69e9ec14c41a853ce4c5c687_star.svg"
            loading="lazy"
            alt=""
            className="hero-social-proof-icon"
          />
          <img
            src="/assets/caliora/69e9ec14c41a853ce4c5c687_star.svg"
            loading="lazy"
            alt=""
            className="hero-social-proof-icon"
          />
          <img
            src="/assets/caliora/69e9ec14c41a853ce4c5c687_star.svg"
            loading="lazy"
            alt=""
            className="hero-social-proof-icon"
          />
          <img
            src="/assets/caliora/69e9ec14c41a853ce4c5c687_star.svg"
            loading="lazy"
            alt=""
            className="hero-social-proof-icon"
          />
          <img
            src={
              fiveStars
                ? "/assets/caliora/69e9ec14c41a853ce4c5c687_star.svg"
                : "/assets/caliora/69e9ec874104e27dcd3e8dc7_star-half.svg"
            }
            loading="lazy"
            alt=""
            className="hero-social-proof-icon"
          />
        </div>
      </div>
    </div>
  );
}
