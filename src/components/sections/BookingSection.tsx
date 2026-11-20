"use client";

import { useState } from "react";
import { CLINIC_INFO } from "@/data/clinic-info";
import { ContactQuickButtons } from "@/components/ui/CtaButton";
import { ClinicHoursCard } from "@/components/ui/ClinicHoursCard";

const CARE_OPTIONS = [
  "Bilan & Contrôle",
  "Détartrage Doux",
  "Facettes E-max",
  "Implant Dentaire 3D",
];

const TIME_OPTIONS = [
  { value: "Dès que possible (urgence)", label: "Dès que possible" },
  { value: "Matinée (09h00 – 13h00)", label: "Matinée (09h–13h)" },
  { value: "Après-midi / Fin de journée", label: "Après-midi / Soir" },
  { value: "Samedi matin (09h00 – 14h30)", label: "Samedi matin" },
];

const PRIORITY_OPTIONS = [
  "Douleur aiguë ou urgence dentaire",
  "Éclat du sourire et esthétique E-max",
  "Bilan complet et détartrage sans douleur",
  "Devis écrit avant traitement planifié",
];

interface BookingSectionProps {
  showHours?: boolean;
}

export function BookingSection({ showHours = false }: BookingSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneStatus, setPhoneStatus] = useState<"idle" | "ok" | "error">("idle");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCare, setSelectedCare] = useState(CARE_OPTIONS[0]);
  const [selectedTime, setSelectedTime] = useState(TIME_OPTIONS[0].value);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateMaPhone = (raw: string): boolean => {
    const trimmed = raw.trim();
    if (!trimmed) {
      setPhoneStatus("idle");
      return true;
    }
    const cleaned = trimmed.replace(/[\s.-]/g, "");
    const valid = /^(?:0|\+?212)?[5-7]\d{8}$/.test(cleaned);
    setPhoneStatus(valid ? "ok" : "error");
    return valid;
  };

  const togglePriority = (item: string) => {
    setPriorities((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateMaPhone(phone)) return;

    const lines = [
      "Bonjour Cabinet Mimosa Smile (Dr. Oubaidi, Kénitra),",
      "Je souhaite demander un rendez-vous :",
      `- Patient : ${name.trim() || "Patient"}`,
      `- Soin souhaité : ${selectedCare}`,
      `- Disponibilité : ${selectedTime}`,
    ];
    if (priorities.length) lines.push(`- Priorité : ${priorities.join(", ")}`);
    if (phone.trim()) lines.push(`- Téléphone : ${phone.trim()}`);
    if (email.trim()) lines.push(`- Email : ${email.trim()}`);
    if (message.trim()) lines.push(`- Motif : ${message.trim()}`);

    setSubmitted(true);
    const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section light-strong">
      <div className="container">
        <div id="form-section" className="flex-wrap">
          <div className="col-2">
            <div className="contact-cta-wrap">
              <h2 className="heading is-large">Réserver votre créneau</h2>
              <ContactQuickButtons />
              {showHours && <ClinicHoursCard />}
            </div>
          </div>

          <div className="col-2">
            <div className="form-layout">
              <div className="the-form w-form">
                <form
                  id="wf-form-Request-form"
                  name="wf-form-Request-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div
                    className={`form-field-wrap${
                      focusedField === "Name" ? " is-focused" : ""
                    }${name.trim() ? " has-value" : ""}`}
                  >
                    <label htmlFor="Name" className="field-label">
                      Nom complet
                    </label>
                    <input
                      className="field w-input"
                      maxLength={256}
                      name="Name"
                      type="text"
                      id="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedField("Name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  <div
                    className={`form-field-wrap${
                      focusedField === "Phone" ? " is-focused" : ""
                    }${phone.trim() ? " has-value" : ""}`}
                  >
                    <label htmlFor="Phone" className="field-label">
                      Téléphone
                    </label>
                    <input
                      className="field w-input"
                      maxLength={256}
                      name="Phone"
                      type="tel"
                      id="Phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneStatus === "error") {
                          validateMaPhone(e.target.value);
                        }
                      }}
                      onFocus={() => setFocusedField("Phone")}
                      onBlur={() => {
                        setFocusedField(null);
                        validateMaPhone(phone);
                      }}
                      aria-invalid={phoneStatus === "error"}
                    />
                    <div
                      className={`field-helper-feedback${
                        phoneStatus === "error"
                          ? " is-error"
                          : phoneStatus === "ok"
                          ? " is-ok"
                          : ""
                      }`}
                      aria-live="polite"
                    >
                      {phoneStatus === "error"
                        ? "Format attendu : 10 chiffres marocains (ex. 06 61 48 20 90)."
                        : phoneStatus === "ok"
                        ? "Numéro valide pour le rappel du secrétariat."
                        : ""}
                    </div>
                  </div>

                  <div
                    className={`form-field-wrap${
                      focusedField === "Email" ? " is-focused" : ""
                    }${email.trim() ? " has-value" : ""}`}
                  >
                    <label htmlFor="Email-3" className="field-label">
                      E-mail (optionnel)
                    </label>
                    <input
                      className="field w-input"
                      maxLength={256}
                      name="Email"
                      type="email"
                      id="Email-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("Email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div
                    className={`form-field-wrap${
                      focusedField === "Message" ? " is-focused" : ""
                    }${message.trim() ? " has-value" : ""}`}
                  >
                    <label htmlFor="Message" className="field-label">
                      Motif de la consultation
                    </label>
                    <textarea
                      className="field message w-input"
                      maxLength={5000}
                      name="Message"
                      id="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocusedField("Message")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="form-field-wrap is-radio">
                    <label className="field-label is-2nd">
                      Type de soin souhaité
                    </label>
                    <div className="tab-form-wrap">
                      {CARE_OPTIONS.map((option) => {
                        const checked = selectedCare === option;
                        return (
                          <label
                            key={option}
                            className={`tab-form-field w-radio${
                              checked ? " is-checked" : ""
                            }`}
                          >
                            <div
                              className={`w-form-formradioinput w-form-formradioinput--inputType-custom tab-form-button w-radio-input${
                                checked ? " w--redirected-checked" : ""
                              }`}
                            ></div>
                            <input
                              type="radio"
                              name="Tab"
                              value={option}
                              checked={checked}
                              onChange={() => setSelectedCare(option)}
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span className="radio-label w-form-label">
                              {option}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-field-wrap is-radio">
                    <label className="field-label is-2nd">
                      Quand souhaitez-vous consulter ?
                    </label>
                    <div className="radio_wrap">
                      {TIME_OPTIONS.map((opt) => {
                        const checked = selectedTime === opt.value;
                        return (
                          <label
                            key={opt.value}
                            className={`radio-field w-radio${
                              checked ? " is-checked" : ""
                            }`}
                          >
                            <div
                              className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input${
                                checked ? " w--redirected-checked" : ""
                              }`}
                            ></div>
                            <input
                              type="radio"
                              name="Radio"
                              value={opt.value}
                              checked={checked}
                              onChange={() => setSelectedTime(opt.value)}
                              style={{
                                opacity: 0,
                                position: "absolute",
                                zIndex: -1,
                              }}
                            />
                            <span className="radio-label w-form-label">
                              {opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="form-field-wrap">
                    <div className="dropdown w-dropdown">
                      <button
                        type="button"
                        className="field-dropdown w-dropdown-toggle"
                        style={{ width: "100%", textAlign: "left" }}
                        aria-expanded={dropdownOpen}
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        <div className="form-span">
                          {priorities.length
                            ? `${priorities.length} priorité(s) sélectionnée(s)`
                            : "Quelle est votre priorité ?"}
                        </div>
                        <img
                          src="/assets/caliora/69e272697fdc6cdab5865880_angle-small-down.svg"
                          loading="lazy"
                          alt=""
                          className="form-select-icon"
                        />
                      </button>
                      <nav
                        className={`dropdown-list w-dropdown-list${
                          dropdownOpen ? " is-open" : ""
                        }`}
                      >
                        {PRIORITY_OPTIONS.map((p) => {
                          const checked = priorities.includes(p);
                          return (
                            <label key={p} className="w-checkbox checkbox-wrap">
                              <div
                                className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox-icon${
                                  checked ? " w--redirected-checked" : ""
                                }`}
                              ></div>
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => togglePriority(p)}
                                style={{
                                  opacity: 0,
                                  position: "absolute",
                                  zIndex: -1,
                                }}
                              />
                              <span className="w-form-label">{p}</span>
                            </label>
                          );
                        })}
                      </nav>
                    </div>
                  </div>

                  <div className="button-form-wrap">
                    <input
                      type="submit"
                      value="Envoyer sur WhatsApp"
                      className="form-submit-button w-button"
                    />
                    <div className="submit-button-infotext">
                      Réponse directe le jour même au {CLINIC_INFO.phoneDisplay}.
                    </div>
                  </div>
                </form>
                {submitted && (
                  <div className="success-message w-form-done" style={{ display: "block" }}>
                    <div className="label-text">
                      Merci ! Votre récapitulatif est prêt sur WhatsApp.
                      <br />
                      Notre secrétariat vous répond rapidement.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
