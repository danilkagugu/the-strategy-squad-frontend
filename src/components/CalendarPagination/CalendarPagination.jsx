import css from "./CalendarPagination.module.css";

const mounth = {
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

const CalendarPagination = ({ nextMounth, prevMounth, dateNow }) => {
  console.log(nextMounth);
  return (
    <div className={css.headerCalendar}>
      <p>Mounth</p>
      <div className={css.calendarInfo}>
        <button onClick={prevMounth}>{"<"}</button>
        <p className={css.calendarDate}>
          {mounth[dateNow.getMonth()] + ", " + dateNow.getFullYear()}
        </p>
        <button onClick={nextMounth}>{">"}</button>
      </div>
    </div>
  );
};

export default CalendarPagination;
