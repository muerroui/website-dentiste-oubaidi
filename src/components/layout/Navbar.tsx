"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CLINIC_INFO } from "@/data/clinic-info";
import {
  NAV_PAGES,
  NAV_QUICK_ACTIONS,
  NAV_SOINS,
} from "@/data/navigation";

interface NavbarProps {
  variant?: "dark-hero" | "light-hero";
}

export function Navbar({ variant = "dark-hero" }: NavbarProps) {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setOpenMega(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isLightHero = variant === "light-hero";
  const logoSrc = isLightHero
    ? "/assets/logo-mimosa-smile.svg"
    : "/assets/logo-mimosa-smile-white.svg";

  return (
    <nav className={`nav${isLightHero ? " is-light-hero" : ""}`}>
      <Link href="/" className="logo-link w-inline-block">
        <img
          src={logoSrc}
          loading="eager"
          alt="Logo Mimosa Smile Kénitra"
          className="brand-logo-image"
        />
        <div className="logo-name">
          <div className="brand-name-text">{CLINIC_INFO.brandName}</div>
          <div className="brand-slogan">{CLINIC_INFO.shortSubtitle}</div>
        </div>
      </Link>

      <div className="nav-layout">
        <div className="nav-links-wrap">
          {/* Mega Menu 1: Pages */}
          <div
            className={`mega-menu${openMega === "pages" ? " is-open" : ""}`}
            onMouseEnter={() => setOpenMega("pages")}
            onMouseLeave={() => setOpenMega(null)}
          >
            <button
              type="button"
              className="nav-link w-inline-block"
              style={{ background: "transparent", border: 0, cursor: "pointer" }}
              aria-expanded={openMega === "pages"}
              onClick={() =>
                setOpenMega((prev) => (prev === "pages" ? null : "pages"))
              }
            >
              <div className="nav-text">Pages</div>
              <div className="nav-icon-wrap">
                <img
                  src="/assets/caliora/69e272697fdc6cdab5865880_angle-small-down.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-icon"
                />
              </div>
            </button>
            <div className="mega-menu-trigger">
              <div className="mega-menu-layout">
                <div className="mega-menu-actions">
                  {NAV_PAGES.map((item) => {
                    const isCurrent = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`mega-menu-link is-small w-inline-block${
                          isCurrent ? " w--current" : ""
                        }`}
                        onClick={() => setOpenMega(null)}
                      >
                        <div className="mega-menu-link-page-name">
                          <div className="nav-text is-1st">{item.label}</div>
                          <div className="nav-text is-2nd">{item.label}</div>
                          <div className="menu-icon-wrap">
                            <img
                              src="/assets/caliora/69d91148a58b88b54b0d9a1b_arrow-dark-2.svg"
                              loading="lazy"
                              alt=""
                              className="nav-link-icon"
                            />
                          </div>
                        </div>
                        <div className="mega-menu-background"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mega Menu 2: Spécialités (4 soins) */}
          <div
            className={`mega-menu${openMega === "soins" ? " is-open" : ""}`}
            onMouseEnter={() => setOpenMega("soins")}
            onMouseLeave={() => setOpenMega(null)}
          >
            <Link
              href="/soins/facettes-esthetique-kenitra"
              className="nav-link w-inline-block"
              aria-expanded={openMega === "soins"}
            >
              <div className="nav-text">Spécialités</div>
              <div className="nav-icon-wrap">
                <img
                  src="/assets/caliora/69e272697fdc6cdab5865880_angle-small-down.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-icon"
                />
              </div>
            </Link>
            <div className="mega-menu-trigger">
              <div className="mega-menu-layout w-dyn-list">
                <div role="list" className="mega-menu-actions is-2nd w-dyn-items">
                  {NAV_SOINS.map((soin) => {
                    const isCurrent = pathname === soin.href;
                    return (
                      <div
                        key={soin.href}
                        role="listitem"
                        className="mega-menu-item w-dyn-item"
                      >
                        <Link
                          aria-label={soin.title}
                          href={soin.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`mega-menu-link with-image w-inline-block${
                            isCurrent ? " w--current" : ""
                          }`}
                          onClick={() => setOpenMega(null)}
                        >
                        <div className="mega-menu-link-image">
                          <img
                            src={soin.image}
                            loading="lazy"
                            alt={soin.title}
                            className="cover-image"
                          />
                        </div>
                        <div className="mega-menu-link-content">
                          <p className="paragraph is-large">{soin.title}</p>
                          <div className="mega-menu-link-about">
                            <div className="paragraph is-small">
                              {soin.description}
                            </div>
                          </div>
                        </div>
                        <div className="link-icon-small">
                          <img
                            src="/assets/caliora/69d91148a58b88b54b0d9b1c_edf08e07c4d6724a81620b99be081259_accordion-icon.svg"
                            loading="lazy"
                            alt=""
                            className="plus-icon"
                          />
                        </div>
                      </Link>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mega Menu 3: Technologies (vide pour l'instant) */}
          <div
            className={`mega-menu${openMega === "quick" ? " is-open" : ""}`}
            onMouseEnter={() => setOpenMega("quick")}
            onMouseLeave={() => setOpenMega(null)}
          >
            <button
              type="button"
              className="nav-link w-inline-block"
              style={{ background: "transparent", border: 0, cursor: "pointer" }}
              aria-expanded={openMega === "quick"}
              onClick={() =>
                setOpenMega((prev) => (prev === "quick" ? null : "quick"))
              }
            >
              <div className="nav-text">Technologies</div>
              <div className="nav-icon-wrap">
                <img
                  src="/assets/caliora/69e272697fdc6cdab5865880_angle-small-down.svg"
                  loading="lazy"
                  alt=""
                  className="nav-link-icon"
                />
              </div>
            </button>
            {NAV_QUICK_ACTIONS.length > 0 && (
              <div className="mega-menu-trigger">
                <div className="mega-menu-layout w-dyn-list">
                  <div role="list" className="mega-menu-actions w-dyn-items">
                    {NAV_QUICK_ACTIONS.map((action) => (
                      <div
                        key={`${action.href}-${action.label}`}
                        role="listitem"
                        className="mega-menu-item w-dyn-item"
                      >
                        <Link
                          aria-label={action.label}
                          href={action.href}
                          className="mega-menu-link is-large w-inline-block"
                          onClick={() => setOpenMega(null)}
                        >
                          <div className="link-icon-large">
                            <img
                              src={action.icon}
                              loading="lazy"
                              alt={action.alt}
                              className="mega-menu-icon"
                            />
                          </div>
                          <div className="mega-menu-link-name">
                            <div className="label-text">{action.label}</div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Burger Menu Button */}
      <div
        className="burger-menu"
        role="button"
        tabIndex={0}
        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setMobileMenuOpen((prev) => !prev);
          }
        }}
      >
        <div className="burger-lines">
          <div className="burger-menu-line"></div>
          <div className="burger-menu-line"></div>
        </div>
        <div className="nav-text">{mobileMenuOpen ? "Fermer" : "Menu"}</div>
      </div>

      {/* Fullscreen Burger Menu (Desktop & Mobile) */}
      <div
        className={`menu${mobileMenuOpen ? " is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="menu-layout">
          <div className="menu-wrap">
            <div className="menu-main">
              <img
                src="/assets/caliora/69dfc37c79510df5326455e1_7366eecc3d0968f50b7264fd87e7f7b2_asterisk-dark-1.svg"
                loading="lazy"
                alt="Mimosa Smile"
                className="menu-visual-image"
              />
              <div className="menu-links-wrap">
                {/* Colonne 1 : Contact & Localisation */}
                <div className="menu-2nd-links">
                  <div className="menu-2nd-wrap">
                    <div className="label-text with-margin">
                      Contact &amp; RDV
                    </div>
                    <a href={CLINIC_INFO.phoneHref} className="menu-2nd-link">
                      Tél : {CLINIC_INFO.phoneDisplay}
                    </a>
                    <a
                      href={CLINIC_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-2nd-link"
                    >
                      WhatsApp : {CLINIC_INFO.whatsappDisplay}
                    </a>
                  </div>
                  <div className="menu-2nd-wrap">
                    <div className="label-text with-margin">Localisation</div>
                    <Link
                      href="/contact-acces-kenitra"
                      className="menu-2nd-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {CLINIC_INFO.address.district} · {CLINIC_INFO.address.city}
                    </Link>
                    <p className="menu-meta-note">
                      23 Av. Chakib Arslan · À 4 min Gare LGV
                    </p>
                  </div>
                </div>

                {/* Colonne 2 : Spécialités (4 soins) */}
                <div className="menu-1st-links">
                  <div className="label-text with-margin">Spécialités</div>
                  {NAV_SOINS.map((soin) => {
                    const isCurrent = pathname === soin.href;
                    return (
                      <Link
                        key={soin.href}
                        href={soin.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`menu-1st-link${
                          isCurrent ? " w--current" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {soin.title}
                      </Link>
                    );
                  })}
                </div>

                {/* Colonne 3 : Pages principales (5 pages) */}
                <div className="menu-1st-links">
                  <div className="label-text with-margin">Navigation</div>
                  {NAV_PAGES.map((item) => {
                    const isCurrent = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`menu-1st-link${
                          isCurrent ? " w--current" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="menu-3rd-links">
              <div className="menu-3rd-links-wrap">
                <Link
                  href="/contact-acces-kenitra"
                  className="menu-3rd-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Prendre rendez-vous ↗
                </Link>
              </div>
            </div>
            <div className="menu-background"></div>
          </div>
        </div>
        <div
          className="menu-full-background"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      </div>
      <div
        className={`nav-background-mega-menu${openMega ? " is-open" : ""}`}
        onClick={() => setOpenMega(null)}
      ></div>
    </nav>
  );
}
