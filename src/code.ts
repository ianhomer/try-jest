export function code(week = 0) {
  if (week < 10) {
    return "AB0" + week;
  } else {
    return "AB" + week;
  }
}
