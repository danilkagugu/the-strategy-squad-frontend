import { useDispatch, useSelector } from "react-redux";
import css from "./CalendarItem.module.css";
import { useEffect } from "react";
import { getWaterPerMonth } from "../../redux/water/operations";
import { selectWaterPerMonth } from "../../redux/water/selectors";

const CalendarItem = ({ allDay, currentMonth }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectWaterPerMonth);
  useEffect(() => {
    dispatch(getWaterPerMonth());
  }, [dispatch]);

  const amount = data.map((item) => item.time);

  console.log(amount);

  const getDayFromDateStr = (dateStr) => {
    const date = new Date(dateStr.substring(0, 10));
    return date.getDate();
  };

  // const getMonthFromDateStr = (dateStr) => {
  //   const date = new Date(dateStr.substring(0, 10));
  //   console.log(currentMonth[date.getMonth()]);
  //   return date.getMonth() + 1;
  // };

  // Функція для знаходження amount для конкретного дня і місяця
  // const getAmountForDayAndMonth = (day, month) => {
  //   const record = data.find(
  //     (item) =>
  //       getDayFromDateStr(item.time) === day &&
  //       getMonthFromDateStr(item.time) === month
  //   );
  //   return record ? record.amount / (2000 / 100) : null;
  // };

  // Функція для знаходження amount для конкретного дня
  // const getAmountForDay = (day) => {
  //   const record = data.find((item) => getDayFromDateStr(item.time) === day);
  //   // const qwe = record.amount;
  //   // const totalAmount =
  //   //   (2500 / qwe.reduce((sum, amount) => sum + amount, 0)) * 10;
  //   return record ? record.amount / (2000 / 100) : 0;
  // };
  const getMonthFromDateStr = (dateStr) => {
    const date = new Date(dateStr.substring(0, 10));
    return date.getMonth() + 1;
  };
  const getAmountForDayAndMonth = (day, month) => {
    const records = data.filter(
      (item) =>
        getDayFromDateStr(item.time) === day &&
        getMonthFromDateStr(item.time) === month
    );
    const totalAmount = records.reduce((sum, record) => sum + record.amount, 0);
    return Math.round((totalAmount / 2000) * 100);
  };

  return (
    <ul className={css.listDay}>
      {allDay.map((day, index) => (
        <li className={css.dayItem} key={index}>
          <div className={css.dayBox}>{day.toString()}</div>

          <span className={css.percent}>
            {getAmountForDayAndMonth(day, currentMonth) !== null
              ? `${getAmountForDayAndMonth(day, currentMonth)}%`
              : "0%"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CalendarItem;

// {
//   index < data.length ? `${data[index].amount} ml` : "No data";
// }

// const getAmountForDay = (day) => {
//   const record = data.find(
//     (item) =>
//       getDayFromDateStr(item.time) === day &&
//       getMonthFromDateStr(item.time) === month
//   );
//   // const qwe = record.amount;
//   // const totalAmount =
//   //   (2500 / qwe.reduce((sum, amount) => sum + amount, 0)) * 10;
//   return record ? record.amount / (2000 / 100) : null;
// };
