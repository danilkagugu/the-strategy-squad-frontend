import { useDispatch, useSelector } from "react-redux";
import css from "./CalendarItem.module.css";
import { useEffect, useState } from "react";
import { getWaterPerMonth } from "../../redux/water/operations";
import { selectWaterPerMonth } from "../../redux/water/selectors";
import {
  getDayFromDateStr,
  getMonthFromDateStr,
} from "../../helpers/getAmountForDayAndMonth";

const CalendarItem = ({ allDay, currentMonth }) => {
  const [chooseDay, setChooseDay] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector(selectWaterPerMonth);
  useEffect(() => {
    dispatch(getWaterPerMonth());
  }, [dispatch]);

  const getAmountForDayAndMonth = (day, month) => {
    const records = data.filter(
      (item) =>
        getDayFromDateStr(item.time) === day &&
        getMonthFromDateStr(item.time) === month
    );
    const totalAmount = records.reduce((sum, record) => sum + record.amount, 0);
    return Math.round((totalAmount / 2000) * 100);
  };

  const selectDay = (day) => {
    setChooseDay(day);
  };
  console.log(chooseDay);
  return (
    <ul className={css.listDay}>
      {allDay.map((day, index) => (
        <li className={css.dayItem} key={index}>
          <button
            onClick={() => selectDay(day)}
            className={`${css.dayBox} ${
              getAmountForDayAndMonth(day, currentMonth, data) > 100
                ? css.dayBoxFull
                : ""
            }`}
          >
            {day.toString()}
          </button>

          <span className={css.percent}>
            {getAmountForDayAndMonth(day, currentMonth) !== null
              ? getAmountForDayAndMonth(day, currentMonth) > 100
                ? "100%"
                : `${getAmountForDayAndMonth(day, currentMonth)}%`
              : "0%"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CalendarItem;
