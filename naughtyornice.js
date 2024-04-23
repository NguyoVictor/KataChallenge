function naughtyOrNice(data) {
  const months = Object.values(data);
  const naughtyCount = months.reduce((acc, month) => {
      const days = Object.values(month);
      return acc + days.filter(day => day === "Naughty").length;
  }, 0);
  return naughtyCount <= 5 ? "Nice!" : "Naughty!";
}
