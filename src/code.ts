export function code(week = 1) {
  if (week < 0 || week > 51) {
    throw new Error(`Week ${week} is out of range`);
  }

  return "AB" + (week < 10 ? "0" : "") + week;
}
