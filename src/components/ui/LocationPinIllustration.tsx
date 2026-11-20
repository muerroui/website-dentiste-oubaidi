export function LocationPinIllustration() {
  return (
    <div className="map-illustration-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 220 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="map-pin-svg"
      >
        <defs>
          <radialGradient id="pinStoneBase" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fffdf9" />
            <stop offset="65%" stopColor="#efe6dc" />
            <stop offset="100%" stopColor="#d8c8b8" />
          </radialGradient>
          <linearGradient id="pinBodyLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffdf9" />
            <stop offset="60%" stopColor="#f2e8dd" />
            <stop offset="100%" stopColor="#d6c3b0" />
          </linearGradient>
          <linearGradient id="pinBodyRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cbb299" />
            <stop offset="100%" stopColor="#8f7868" />
          </linearGradient>
          <linearGradient id="pinGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5c89e" />
            <stop offset="100%" stopColor="#9c7c5b" />
          </linearGradient>
          <filter id="pinSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="6"
              floodColor="#231d18"
              floodOpacity="0.14"
            />
          </filter>
        </defs>

        {/* Lignes topographiques légères */}
        <ellipse
          cx="110"
          cy="104"
          rx="92"
          ry="24"
          stroke="#8f7868"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <ellipse
          cx="110"
          cy="104"
          rx="74"
          ry="18"
          stroke="#8f7868"
          strokeOpacity="0.24"
          strokeWidth="1"
        />

        {/* Socle architectural en pierre naturelle (3D) */}
        <g filter="url(#pinSoftShadow)">
          <ellipse cx="110" cy="108" rx="52" ry="13" fill="#c7b4a1" />
          <ellipse
            cx="110"
            cy="103"
            rx="52"
            ry="13"
            fill="url(#pinStoneBase)"
            stroke="#c9b6a3"
            strokeWidth="1"
          />
        </g>

        {/* Ombre de contact sous la pointe du pin */}
        <ellipse
          cx="110"
          cy="102"
          rx="14"
          ry="4"
          fill="#2b231d"
          fillOpacity="0.18"
        />

        {/* Pin architectural 3D (ivoire & bronze brossé) */}
        <g filter="url(#pinSoftShadow)">
          {/* Côté droit / biseau bronze pour l'effet 3D */}
          <path
            d="M110 16C131.5 16 149 33.2 149 54.5C149 76.2 126.2 92.6 112.5 100.8C111.7 101.3 110.9 101.5 110 101.5V16Z"
            fill="url(#pinBodyRight)"
          />
          {/* Face gauche / principale ivoire */}
          <path
            d="M110 16C88.5 16 71 33.2 71 54.5C71 76.2 93.8 92.6 107.5 100.8C108.3 101.3 109.1 101.5 110 101.5V16Z"
            fill="url(#pinBodyLeft)"
          />
          {/* Contour subtil */}
          <path
            d="M110 16C88.5 16 71 33.2 71 54.5C71 76.2 93.8 92.6 107.5 100.8C109 101.7 111 101.7 112.5 100.8C126.2 92.6 149 76.2 149 54.5C149 33.2 131.5 16 110 16Z"
            stroke="#b89f87"
            strokeWidth="1"
          />

          {/* Médaillon central */}
          <circle
            cx="110"
            cy="53"
            r="17"
            fill="#2b231d"
            stroke="url(#pinGoldRim)"
            strokeWidth="2.5"
          />
          {/* Point doré central */}
          <circle cx="110" cy="53" r="5.5" fill="url(#pinGoldRim)" />
        </g>
      </svg>
    </div>
  );
}
