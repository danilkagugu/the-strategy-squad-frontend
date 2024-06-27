export const getDayFromDateStr = (dateStr) => {
  const date = new Date(dateStr.substring(0, 10));
  return date.getDate();
};

export const getMonthFromDateStr = (dateStr) => {
  const date = new Date(dateStr.substring(0, 10));
  return date.getMonth() + 1;
};

export const getCurrentWeek = (date) => {
  const mondey = new Date(date);
  mondey.setDate(date.getDate() - date.getDay() + 1);
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(mondey);
    day.setDate(mondey.getDate() + i);
    weekDates.push(day);
  }
  return weekDates;
};
