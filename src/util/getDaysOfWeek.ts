export function getDaysOfWeek() {
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - date.getDay() + i);
    return date.toLocaleDateString("pt-BR", { weekday: "long" });
  });

  return daysOfWeek;
}
