import style from "./ChooseDate.module.css";
export default function ChooseDate({ data }) {
  const date = new Date(data);

  const currentDate = new Date();
  const isToday =
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();

  let monthName = date.toLocaleString("en-us", { month: "long" });
  let dayInMonth = date.getDate();

  let formData;
  if (isToday) {
    formData = "Today";
  } else if (isNaN(dayInMonth) || isNaN(date.getTime())) {
    formData = "Invalid Date";
  } else {
    formData = `${dayInMonth}, ${monthName}`;
  }
  return <p className={style.text}>{formData}</p>;
}
