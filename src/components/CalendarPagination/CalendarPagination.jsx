import css from "./CalendarPagination.module.css";
import sprite from "../../assets/icons.svg";
import { useTranslation } from "react-i18next";

const CalendarPagination = ({
  nextMounth,
  prevMounth,
  dateNow,
  openRecharts,
  setOpenRecharts,
}) => {
  const { t } = useTranslation();
  const month = {
    0: t("january"),
    1: t("february"),
    2: t("march"),
    3: t("april"),
    4: t("may"),
    5: t("june"),
    6: t("july"),
    7: t("august"),
    8: t("september"),
    9: t("october"),
    10: t("november"),
    11: t("december"),
  };
  const featureMouth =
    dateNow.getFullYear() > new Date().getFullYear() ||
    (dateNow.getFullYear() === new Date().getFullYear() &&
      dateNow.getMonth() >= new Date().getMonth());
  return (
    <div className={css.headerCalendar}>
      <p className={css.month}>{openRecharts ? t("statistics") : t("month")}</p>
      <div className={css.calendarInfo}>
        <button className={css.btnPrevMonth} onClick={prevMounth}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cheveron-left`}></use>
          </svg>
        </button>
        <p className={css.calendarDate}>
          {month[dateNow.getMonth()] + ", " + dateNow.getFullYear()}
        </p>
        <button
          className={css.btnDisabled}
          onClick={nextMounth}
          disabled={featureMouth}
        >
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cheveron-right`}></use>
          </svg>
        </button>
        <button className={css.iconPieChart} onClick={setOpenRecharts}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-pie-chart`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarPagination;
