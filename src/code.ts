export function code(week = 0) {
  if (week < 0) {
    throw new Error(`Week ${week} is out of range`);
  }

  return "AB" + (week < 10 ? "0" : "") + week;
}
