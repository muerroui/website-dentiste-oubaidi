import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinic-info";

interface CtaButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export function CtaButton({
  label,
  href,
  variant = "primary",
  external = false,
}: CtaButtonProps) {
  const isSecondary = variant === "secondary";
  const variantClass = isSecondary
    ? " w-variant-55bff964-60aa-df6f-b862-bd5e5ff176e0"
    : "";
  const arrowSrc = isSecondary
    ? "/assets/caliora/69d91148a58b88b54b0d9a1b_arrow-dark-2.svg"
    : "/assets/caliora/69dfdbea6df3e2a88f38ce35_arrow-brand-light.svg";

  const content = (
    <>
      <div className="button-text">{label}</div>
      <div className={`button-icon-wrap${variantClass}`}>
        <img src={arrowSrc} loading="lazy" alt="" className="button-icon" />
      </div>
      <div className={`button-background-animation${variantClass}`}></div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`button${variantClass} w-inline-block`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`button${variantClass} w-inline-block`}>
      {content}
    </Link>
  );
}

export function ContactQuickButtons() {
  return (
    <div className="contact-buttons">
      <a
        href={CLINIC_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link w-inline-block"
      >
        <svg
          className="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <p className="contact-link-text">WhatsApp Direct</p>
        <div className="contact-bg"></div>
      </a>
      <a href={CLINIC_INFO.phoneHref} className="contact-link w-inline-block">
        <img
          loading="lazy"
          src="/assets/caliora/69d91148a58b88b54b0d9c42_963ce6ab3b25af601d55188589add06e_phone-icon.svg"
          alt=""
          className="contact-icon"
        />
        <p className="contact-link-text">{CLINIC_INFO.phoneDisplay}</p>
        <div className="contact-bg"></div>
      </a>
    </div>
  );
}
