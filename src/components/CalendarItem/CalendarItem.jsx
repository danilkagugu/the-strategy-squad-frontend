import css from "./CalendarItem.module.css";

const CalendarItem = ({ allDay }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 101);
  };
  return (
    <ul className={css.listDay}>
      {allDay.map((day, index) => (
        <li className={css.dayItem} key={index}>
          <div className={css.dayBox}>{day.toString()}</div>
          <span className={css.percent}>{randomNumber()}%</span>
        </li>
      ))}
    </ul>
  );
};

export default CalendarItem;
