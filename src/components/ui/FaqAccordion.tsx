"use client";

import { useState } from "react";

export interface FaqEntry {
  question: string;
  answer: string;
  linkLabel?: string;
  linkHref?: string;
}

interface CalioraFaqListProps {
  items: FaqEntry[];
}

export function CalioraFaqList({ items }: CalioraFaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="features-accordions">
      <div className="features-accordions-list faq-list">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="features-accordion-item">
              <div className="features-accordion-number">
                <div className="label-text">{idx + 1}</div>
              </div>
              <div className="features-accordion-block">
                <div
                  className={`accordion${isOpen ? " is-open" : ""}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <button
                    type="button"
                    className="accordion-toggle"
                    style={{ background: "transparent", border: 0 }}
                    aria-expanded={isOpen}
                  >
                    <p className="paragraph is-large">{item.question}</p>
                    <img
                      loading="lazy"
                      src="/assets/caliora/69d91148a58b88b54b0d9b1c_edf08e07c4d6724a81620b99be081259_accordion-icon.svg"
                      alt=""
                      className="accordion-icon"
                    />
                  </button>
                  <div className="accordion-dropdown">
                    <div className="accordion-spacing">
                      <p className="paragraph">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
