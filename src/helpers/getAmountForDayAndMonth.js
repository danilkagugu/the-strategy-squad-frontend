export const getDayFromDateStr = (dateStr) => {
  const date = new Date(dateStr.substring(0, 10));
  return date.getDate();
};

export const getMonthFromDateStr = (dateStr) => {
  const date = new Date(dateStr.substring(0, 10));
  return date.getMonth() + 1;
};
