import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinic-info";
import { FOOTER_LINK_GROUPS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container in-footer">
        <div className="footer-layout">
          <div className="footer-brand">
            <Link href="/" className="footer-logo w-inline-block">
              <img
                src="/assets/logo-mimosa-smile-white.svg"
                loading="lazy"
                alt="Logo Mimosa Smile Kénitra"
                className="footer-brand-logo-image"
              />
              <div className="logo-name">
                <div className="footer-brand-name-text">
                  <strong>{CLINIC_INFO.brandName}</strong>
                </div>
                <div className="footer-brand-slogan">
                  Dr. Oubaidi · Clinique Dentaire Kénitra
                </div>
              </div>
            </Link>
          </div>

          <div className="footer-primary">
            <div className="footer-contact-wrap">
              <div className="footer-contact-block">
                <div className="footer-label-text">Prise de rendez-vous</div>
                <a href={CLINIC_INFO.phoneHref} className="footer-link-medium">
                  Tél : {CLINIC_INFO.phoneDisplay}
                </a>
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-medium"
                >
                  WhatsApp : {CLINIC_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="footer-contact-block">
                <div className="footer-label-text">
                  Adresse &amp; Accès au cabinet
                </div>
                <Link
                  href="/contact-acces-kenitra"
                  className="footer-link-medium"
                >
                  {CLINIC_INFO.address.district} — {CLINIC_INFO.address.city}
                </Link>
                <Link
                  href="/contact-acces-kenitra"
                  className="footer-link-medium is-address"
                >
                  {CLINIC_INFO.address.full}
                </Link>
              </div>
            </div>

            <div className="footer-main-links">
              {FOOTER_LINK_GROUPS.map((group) => (
                <div key={group.title} className="footer-links-layout">
                  <div className="footer-label-text">{group.title}</div>
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="footer-link-large"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="subfooter">
            <div className="footer-small-links is-left">
              <span className="footer-small-link">
                {CLINIC_INFO.legal.copyright}
              </span>
              <span className="footer-small-link is-hide-mobile">
                {CLINIC_INFO.legal.order}
              </span>
            </div>
            <div className="footer-small-links is-right is-hide-mobile">
              <Link href="/contact-acces-kenitra" className="footer-small-link">
                Accès &amp; Google Maps
              </Link>
              <Link href="/sitemap.xml" className="footer-small-link">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-background">
        <div className="footer-overlay"></div>
        <img
          src="/assets/caliora/69d91148a58b88b54b0d9c10_c870240ec4e17eaffbb204b160df727c_bg-mesh-gradient.avif"
          loading="lazy"
          alt=""
          className="cover-image"
        />
      </div>
    </footer>
  );
}
