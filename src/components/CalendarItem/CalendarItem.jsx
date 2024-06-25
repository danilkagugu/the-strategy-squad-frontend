import { useDispatch, useSelector } from "react-redux";
import css from "./CalendarItem.module.css";
import { useEffect } from "react";
import { getWaterPerDay } from "../../redux/water/operations";
import { selectWaterPerDay } from "../../redux/water/selectors";

const CalendarItem = ({ allDay }) => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectWaterPerDay);
  const amount = data.map((item) => item.amount);
  console.log(amount);
  const randomNumber = () => {
    return Math.floor(Math.random() * 101);
  };
  useEffect(() => {
    dispatch(getWaterPerDay());
  }, [dispatch]);
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
