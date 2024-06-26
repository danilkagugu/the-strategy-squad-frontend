import { useEffect, useState } from "react";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import css from "./MonthInfo.module.css";
import Recharts from "../Recharts/Recharts";
import { selectWaterPerMonth } from "../../redux/water/selectors";
import { useSelector } from "react-redux";
import {
  getCurrentWeek,
  getDayFromDateStr,
  getMonthFromDateStr,
} from "../../helpers/getAmountForDayAndMonth";

const MonthInfo = ({ clickOnDay }) => {
  const [openRecharts, setOpenRecharts] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayInMounth, setDayInMounth] = useState([]);
  const data = useSelector(selectWaterPerMonth);
  const toogleOpenRecharts = () => {
    setOpenRecharts((prevState) => !prevState);
  };
  const prevMounth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };
  const nextMounth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };
  useEffect(() => {
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const days = [];

    for (let i = 1; i <= lastDay; i++) {
      days.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), i).getDate()
      );
    }
    setDayInMounth(days);
  }, [currentDate]);

  const getAmountForDayAndMonth = (day, month) => {
    const records = data.filter(
      (item) =>
        getDayFromDateStr(item.time) === day &&
        getMonthFromDateStr(item.time) === month
    );
    const totalAmount = records.reduce((sum, record) => sum + record.amount, 0);
    return totalAmount;
  };
  const currentWeekDates = getCurrentWeek(currentDate);
  const dataRecharts = currentWeekDates.map((day) => ({
    date: day.getDate(),
    value: getAmountForDayAndMonth(day.getDate(), day.getMonth() + 1),
  }));
  return (
    <>
      <div className={css.block}>
        <CalendarPagination
          dateNow={currentDate}
          prevMounth={prevMounth}
          nextMounth={nextMounth}
          setOpenRecharts={toogleOpenRecharts}
          openRecharts={openRecharts}
        />
        {openRecharts ? (
          <Recharts data={dataRecharts} />
        ) : (
          <Calendar
            day={dayInMounth}
            currentMonth={currentDate.getMonth() + 1}
            clickOnDay={clickOnDay}
          />
        )}
      </div>
    </>
  );
};

export default MonthInfo;
