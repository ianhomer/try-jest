export function code(week = 0) {
  return "AB" + (week < 10 ? "0" : "") + week;
}
