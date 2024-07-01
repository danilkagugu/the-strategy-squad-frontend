import { useTranslation } from "react-i18next";
import style from "./ChooseDate.module.css";

export default function ChooseDate({ data }) {
  const { t } = useTranslation();
  const date = new Date(data);
  let monthName = date.toLocaleString("en-us", { month: "long" });
  let dayInMonth = date.getDate();

  // Використання перекладу місяців
  const translatedMonthNames = {
    January: t("january"),
    February: t("february"),
    March: t("march"),
    April: t("april"),
    May: t("may"),
    June: t("june"),
    July: t("july"),
    August: t("august"),
    September: t("september"),
    October: t("october"),
    November: t("november"),
    December: t("december"),
  };

  const translatedMonthName = translatedMonthNames[monthName];

  if (isNaN(dayInMonth) || isNaN(date.getTime())) {
    dayInMonth = `${t("today")}`;
    monthName = "";
  } else {
    dayInMonth = `${dayInMonth}`;
    monthName = `, ${translatedMonthName}`;
  }
  const formData = `${dayInMonth}${monthName}`;

  return <p className={style.text}>{formData}</p>;
}
