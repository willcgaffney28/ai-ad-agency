export function formatRelativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - then);

  const minute = 60_000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) return "just now";
  if (diff < hour) {
    const m = Math.round(diff / minute);
    return `${m} ${m === 1 ? "minute" : "minutes"} ago`;
  }
  if (diff < day) {
    const h = Math.round(diff / hour);
    return `${h} ${h === 1 ? "hour" : "hours"} ago`;
  }
  if (diff < 7 * day) {
    const d = Math.round(diff / day);
    return `${d} ${d === 1 ? "day" : "days"} ago`;
  }
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
