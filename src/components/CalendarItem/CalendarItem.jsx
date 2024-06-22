import css from "./CalendarItem.module.css";

const CalendarItem = ({ allDay }) => {
  return (
    <ul className={css.listDay}>
      {allDay.map((day, index) => (
        <li className={css.dayItem} key={index}>
          <div className={css.dayBox}>{day.toString()}</div>
        </li>
      ))}
    </ul>
  );
};

export default CalendarItem;
