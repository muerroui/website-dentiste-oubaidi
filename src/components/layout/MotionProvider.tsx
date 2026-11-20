"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      // 1. Parallax images inside .parallax-wrap
      gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((img) => {
        const trigger = img.closest(".parallax-wrap") || img;
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.08 },
          {
            yPercent: 6,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 2. Scroll reveal: never hide elements or leave them at opacity 0
      const revealTargets = gsap.utils.toArray<HTMLElement>(
        [
          ".condition-item",
          ".condition-compact-item",
          ".treatment-card",
          ".blog-card",
          ".blog-card-small",
          ".stats-cms-item",
          ".direction-item",
        ].join(", ")
      );

      if (revealTargets.length > 0) {
        gsap.set(revealTargets, { clearProps: "opacity,visibility,transform" });
      }

      // 3. Circle CTA subtle rotation (only when present on page)
      if (document.querySelector(".circle-border-1")) {
        gsap.to(".circle-border-1", {
          rotation: 360,
          duration: 48,
          ease: "none",
          repeat: -1,
          transformOrigin: "center center",
        });
      }

      if (document.querySelector(".circle-border-2")) {
        gsap.to(".circle-border-2", {
          rotation: -360,
          duration: 64,
          ease: "none",
          repeat: -1,
          transformOrigin: "center center",
        });
      }

      // 4. Hero stats line fill animation
      const statLines = gsap.utils.toArray<HTMLElement>(".stat-line-animation");
      if (statLines.length > 0) {
        gsap.fromTo(
          statLines,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
          }
        );
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
