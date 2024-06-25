import css from "./CalendarPagination.module.css";
import sprite from "../../assets/icons.svg";

const month = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const CalendarPagination = ({
  nextMounth,
  prevMounth,
  dateNow,
  openRecharts,
}) => {
  const featureMouth =
    dateNow.getFullYear() > new Date().getFullYear() ||
    (dateNow.getFullYear() === new Date().getFullYear() &&
      dateNow.getMonth() >= new Date().getMonth());
  console.log(dateNow.getMonth());
  return (
    <div className={css.headerCalendar}>
      <p className={css.mouth}>Mounth</p>
      <div className={css.calendarInfo}>
        <button onClick={prevMounth}>
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
        <button className={css.iconPieChart} onClick={openRecharts}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-pie-chart`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarPagination;
