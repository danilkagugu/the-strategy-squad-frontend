import { useTranslation } from "react-i18next";
import style from "./ChooseDate.module.css";
export default function ChooseDate({ data }) {
  const { t } = useTranslation();
  const date = new Date(data);
  let monthName = date.toLocaleString("en-us", { month: "long" });
  let dayInMonth = date.getDate();

  if (isNaN(dayInMonth) || isNaN(date.getTime())) {
    dayInMonth = `${t("today")}`;
    monthName = "";
  } else {
    dayInMonth = `${dayInMonth}`;
    monthName = `, ${monthName}`;
  }
  const formData = `${dayInMonth}${monthName}`;

  return <p className={style.text}>{formData}</p>;
}
