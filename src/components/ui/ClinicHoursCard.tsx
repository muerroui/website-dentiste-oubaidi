"use client";

import { useEffect, useState } from "react";

interface DaySchedule {
  dayIndex: number; // 0 = Dimanche, 1 = Lundi ... 6 = Samedi
  day: string;
  shortHours: string;
  openMin: number;
  closeMin: number;
  barWidthPercent: number;
}

const WEEK_SCHEDULE: DaySchedule[] = [
  { dayIndex: 1, day: "Lundi", shortHours: "09h00 – 19h30", openMin: 540, closeMin: 1170, barWidthPercent: 100 },
  { dayIndex: 2, day: "Mardi", shortHours: "09h00 – 19h30", openMin: 540, closeMin: 1170, barWidthPercent: 100 },
  { dayIndex: 3, day: "Mercredi", shortHours: "09h00 – 19h30", openMin: 540, closeMin: 1170, barWidthPercent: 100 },
  { dayIndex: 4, day: "Jeudi", shortHours: "09h00 – 19h30", openMin: 540, closeMin: 1170, barWidthPercent: 100 },
  { dayIndex: 5, day: "Vendredi", shortHours: "09h00 – 19h30", openMin: 540, closeMin: 1170, barWidthPercent: 100 },
  { dayIndex: 6, day: "Samedi", shortHours: "09h00 – 14h30", openMin: 540, closeMin: 870, barWidthPercent: 52 },
  { dayIndex: 0, day: "Dimanche", shortHours: "Fermé", openMin: 0, closeMin: 0, barWidthPercent: 0 },
];

interface MoroccoTimeState {
  dayIndex: number;
  minutesNow: number;
  isOpen: boolean;
  statusLabel: string;
  statusSub: string;
}

function getMoroccoTimeState(): MoroccoTimeState {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Casablanca",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekdayStr = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 10);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const dayIndex = dayMap[weekdayStr] ?? 1;
  const minutesNow = (hour === 24 ? 0 : hour) * 60 + minute;

  const today = WEEK_SCHEDULE.find((d) => d.dayIndex === dayIndex);
  if (today && today.closeMin > 0 && minutesNow >= today.openMin && minutesNow < today.closeMin) {
    const closeH = Math.floor(today.closeMin / 60);
    const closeM = String(today.closeMin % 60).padStart(2, "0");
    return {
      dayIndex,
      minutesNow,
      isOpen: true,
      statusLabel: "Ouvert maintenant",
      statusSub: `Ferme à ${closeH}h${closeM}`,
    };
  }

  let nextSub = "Ouvre à 09h00";
  if (dayIndex === 0 || (dayIndex === 6 && minutesNow >= 870)) {
    nextSub = "Ouvre lundi à 09h00";
  } else if (today && today.closeMin > 0 && minutesNow >= today.closeMin) {
    nextSub = "Ouvre demain à 09h00";
  }

  return {
    dayIndex,
    minutesNow,
    isOpen: false,
    statusLabel: "Actuellement fermé",
    statusSub: nextSub,
  };
}

export function ClinicHoursCard() {
  const [timeState, setTimeState] = useState<MoroccoTimeState | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeState(getMoroccoTimeState());
    const id = setInterval(() => {
      setTimeState(getMoroccoTimeState());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`booking-hours-card${expanded ? " is-expanded" : ""}`}
      aria-label="Horaires d'ouverture du cabinet"
    >
      <button
        type="button"
        className="booking-hours-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="booking-hours-title-group">
          <span className="label-text">Horaires du cabinet</span>
          <h3 className="heading is-xsmall">Disponibilités à Kénitra</h3>
        </div>

        <span className="booking-hours-chevron-btn" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>

        {timeState && (
          <div
            className={`booking-hours-status${
              timeState.isOpen ? " is-open" : " is-closed"
            }`}
          >
            <span className="booking-hours-pulse" aria-hidden="true"></span>
            <div className="booking-hours-status-text">
              <strong>{timeState.statusLabel}</strong>
              <span>{timeState.statusSub}</span>
            </div>
          </div>
        )}
      </button>

      <div
        className={`booking-hours-collapse${expanded ? " is-expanded" : ""}`}
      >
        <div className="booking-hours-collapse-inner">
          <div className="booking-hours-body">
            <div className="booking-hours-list" role="list">
        {WEEK_SCHEDULE.map((item) => {
          const isToday = timeState?.dayIndex === item.dayIndex;
          const isClosedDay = item.closeMin === 0;

          let progressPercent = 0;
          if (isToday && !isClosedDay && timeState) {
            const raw =
              ((timeState.minutesNow - item.openMin) /
                (item.closeMin - item.openMin)) *
              100;
            progressPercent = Math.max(0, Math.min(100, raw));
          }

          return (
            <div
              key={item.day}
              role="listitem"
              className={`booking-hours-row${isToday ? " is-today" : ""}${
                isClosedDay ? " is-closed" : ""
              }`}
            >
              <div className="booking-hours-day-col">
                <span className="booking-hours-day">{item.day}</span>
                {isToday && (
                  <span className="booking-hours-today-pill">Aujourd’hui</span>
                )}
              </div>

              <div className="booking-hours-track" aria-hidden="true">
                {!isClosedDay ? (
                  <div
                    className="booking-hours-fill"
                    style={{ width: `${item.barWidthPercent}%` }}
                  >
                    {isToday && timeState?.isOpen && (
                      <span
                        className="booking-hours-now-dot"
                        style={{ left: `${progressPercent}%` }}
                      />
                    )}
                  </div>
                ) : (
                  <div className="booking-hours-closed-line" />
                )}
              </div>

              <span className="booking-hours-time">{item.shortHours}</span>
            </div>
          );
        })}
      </div>

            <div className="booking-hours-footer">
              <span className="booking-hours-footer-dot" aria-hidden="true"></span>
              <span>Urgences dentaires reçues le jour même · Quartier Mimosa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
