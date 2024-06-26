import style from "./ChooseDate.module.css";
export default function ChooseDate({ data }) {
  const date = new Date(data);
  let monthName = date.toLocaleString("en-us", { month: "long" });
  let dayInMonth = date.getDate();

  if (isNaN(dayInMonth) || isNaN(date.getTime())) {
    dayInMonth = "Today";
    monthName = "";
  } else {
    dayInMonth = `${dayInMonth}`;
    monthName = `, ${monthName}`;
  }
  const formData = `${dayInMonth}${monthName}`;

  return <p className={style.text}>{formData}</p>;
}
