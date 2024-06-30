import { useDispatch, useSelector } from "react-redux";
import css from "./CalendarItem.module.css";
import { useEffect } from "react";
import { getWaterPerMonth } from "../../redux/water/operations";
import { selectWaterPerMonth } from "../../redux/water/selectors";
import {
  getDayFromDateStr,
  getMonthFromDateStr,
} from "../../helpers/getAmountForDayAndMonth";
import { selectUserData } from "../../redux/auth/selectors";

const CalendarItem = ({ allDay, currentMonth, clickOnDay }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectWaterPerMonth);
  const user = useSelector(selectUserData);

  useEffect(() => {
    dispatch(getWaterPerMonth(currentMonth));
  }, [dispatch, currentMonth]);

  const formatDay = (day) => {
    const date = new Date(new Date().getFullYear(), currentMonth - 1, day);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const dayFormatted = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${dayFormatted}`;
  };

  const getAmountForDayAndMonth = (day, month) => {
    const fullWaterOfDay = data.filter(
      (item) =>
        getDayFromDateStr(item.time) === day &&
        getMonthFromDateStr(item.time) === month
    );

    const totalAmount = fullWaterOfDay.reduce(
      (sum, record) => sum + record.amount,
      0
    );

    return Math.round((totalAmount / user?.waterNorm) * 100);
  };

  return (
    <ul className={css.listDay}>
      {allDay.map((day, index) => (
        <li className={css.listDayItem} key={index}>
          <div className={css.dayItem}>
            <button
              onClick={() => {
                clickOnDay(formatDay(day));
              }}
              className={`${css.dayBox} ${getAmountForDayAndMonth(day, currentMonth) >= 100
                  ? css.dayBoxFull
                  : ""
                }`}
            >
              {day.toString()}
            </button>

            <span className={css.percent}>
              {getAmountForDayAndMonth(day, currentMonth) !== null
                ? getAmountForDayAndMonth(day, currentMonth) >= 100
                  ? "100%"
                  : `${getAmountForDayAndMonth(day, currentMonth)}%`
                : "0%"}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CalendarItem;
