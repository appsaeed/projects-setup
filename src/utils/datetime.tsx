export function dbTodate(date = "2023-03-28 20:04:10"): string {
  try {
    return new Date(date)
      .toLocaleDateString([], {
        month: "short",
        day: "numeric",
        year: "2-digit",
      })
      .toString();
  } catch (error) {
    return "";
  }
}

export function dbTotime(time = "2023-03-28 20:04:10"): string {
  try {
    return new Date(time)
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
      .toString();
  } catch (error) {
    return "";
  }
}
