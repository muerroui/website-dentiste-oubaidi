"use client";

import { useEffect, useRef } from "react";

export function ArticleParallaxShapes() {
  const leftRef = useRef<SVGSVGElement | null>(null);
  const rightRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let rafId = 0;
    const update = () => {
      const y = Math.min(window.scrollY, 700);
      if (leftRef.current) {
        leftRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translate3d(0, ${-y * 0.24}px, 0)`;
      }
      rafId = 0;
    };

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="mimosa-blog-shapes" aria-hidden="true">
      <svg
        ref={leftRef}
        className="mimosa-blog-shape is-left"
        viewBox="0 0 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="190" cy="190" r="189" fill="#E8DDD0" fillOpacity="0.55" />
        <circle
          cx="190"
          cy="190"
          r="138"
          stroke="#B59B84"
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
      </svg>

      <svg
        ref={rightRef}
        className="mimosa-blog-shape is-right"
        viewBox="0 0 284 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="16"
          y="16"
          width="252"
          height="252"
          rx="126"
          fill="#DFD0C0"
          fillOpacity="0.5"
        />
        <circle
          cx="142"
          cy="142"
          r="92"
          stroke="#8F7868"
          strokeOpacity="0.24"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
