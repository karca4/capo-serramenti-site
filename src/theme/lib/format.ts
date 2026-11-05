import type { DayOfWeek, OpeningHours } from "../config/types";

/**
 * Anni di attività arrotondati per difetto al multiplo di `step`:
 * con fondazione nel 2000, nel 2026 restituisce 25 ("oltre 25 anni"),
 * dal 2030 restituisce 30. Così i testi non invecchiano.
 */
export function yearsInBusiness(foundedYear: number, step = 5): number {
  const years = new Date().getFullYear() - foundedYear;
  return Math.max(step, Math.floor(years / step) * step);
}

const DAYS: { id: DayOfWeek; short: string }[] = [
  { id: "Monday", short: "Lun" },
  { id: "Tuesday", short: "Mar" },
  { id: "Wednesday", short: "Mer" },
  { id: "Thursday", short: "Gio" },
  { id: "Friday", short: "Ven" },
  { id: "Saturday", short: "Sab" },
  { id: "Sunday", short: "Dom" },
];

/**
 * Raggruppa gli orari per giorni consecutivi con le stesse fasce:
 * [{ days: "Lun–Ven", hours: "08:00–13:00, 14:00–17:00" },
 *  { days: "Sab–Dom", hours: "Chiuso" }]
 */
export function formatOpeningHours(
  hours: OpeningHours[],
): { days: string; hours: string }[] {
  const perDay = DAYS.map(({ id, short }) => {
    const slots = hours
      .filter((h) => h.days.includes(id))
      .sort((a, b) => a.opens.localeCompare(b.opens))
      .map((h) => `${h.opens}–${h.closes}`);
    return { short, hours: slots.length ? slots.join(", ") : "Chiuso" };
  });

  const groups: { from: string; to: string; hours: string }[] = [];
  for (const day of perDay) {
    const last = groups[groups.length - 1];
    if (last && last.hours === day.hours) last.to = day.short;
    else groups.push({ from: day.short, to: day.short, hours: day.hours });
  }
  return groups.map((g) => ({
    days: g.from === g.to ? g.from : `${g.from}–${g.to}`,
    hours: g.hours,
  }));
}

export function formatAddress(a: {
  street: string;
  postalCode: string;
  city: string;
  province: string;
}): string {
  return `${a.street}, ${a.postalCode} ${a.city} (${a.province})`;
}

/** Data ISO ("2025-02-14") in formato leggibile ("14 febbraio 2025"). */
export function formatDate(iso: string, locale = "it-IT"): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
