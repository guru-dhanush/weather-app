export const formatForecastDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const today = new Date();

  const isToday = date.toDateString() === today.toDateString();

  const isTomorrow =
    date.toDateString() ===
    new Date(today.setDate(today.getDate() + 1)).toDateString();

  const dayLabel = isToday
    ? "Today"
    : isTomorrow
    ? "Tomorrow"
    : date.toLocaleDateString(undefined, { weekday: "short" });

  const formattedDate = date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });

  return { dayLabel, formattedDate };
};
