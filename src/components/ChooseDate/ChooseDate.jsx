import style from "./ChooseDate.module.css";
export default function ChooseDate({ data }) {
  const [day, month] = data.split(", ");
  const currentYear = new Date().getFullYear();
  const date = new Date(`${month} ${day}, ${currentYear}`);

  const currentDate = new Date();

  const isToday =
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentYear;

  let formData;
  if (isToday) {
    formData = "Today";
  } else {
    formData = `${day}, ${month}`;
  }
  return <p className={style.text}>{formData}</p>;
}
