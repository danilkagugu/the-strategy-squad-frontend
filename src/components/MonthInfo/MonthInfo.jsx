//! Відображається на сторінці /test

import { useEffect, useState } from "react";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import css from "./MonthInfo.module.css";
import Recharts from "../Recharts/Recharts";

const MonthInfo = ({ onDayClick }) => {
  const [openRecharts, setOpenRecharts] = useState(false);
  const toogleOpenRecharts = () => {
    setOpenRecharts((prevState) => !prevState);
  };
  // console.log(openRecharts);
  const randomNumber = () => {
    return Math.floor(Math.random() * 101);
  };

  const arrayPercent = [];

  const [currentDate, setCurrentDate] = useState(new Date());

  const [dayInMounth, setDayInMounth] = useState([]);

  // const [percent, setPercent] = useState([randomNumber()]);
  for (let i = 1; i <= currentDate.getDate(); i++) {
    arrayPercent.push(randomNumber());
  }
  // console.log(dayInMounth);
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

  const handleDayClickInternal = (day) => {
    onDayClick(day, currentDate);
  };

  const dataRecharts = dayInMounth.map((day, i) => ({
    date: day,
    value: arrayPercent[i] / 100,
  }));
  return (
    <>
      <div className={css.block}>
        <CalendarPagination
          dateNow={currentDate}
          prevMounth={prevMounth}
          nextMounth={nextMounth}
          openRecharts={toogleOpenRecharts}
        />
        {openRecharts ? (
          <Recharts data={dataRecharts} />
        ) : (
          <Calendar
            day={dayInMounth}
            randomNumber={arrayPercent}
            onDayClick={handleDayClickInternal}
          />
        )}
      </div>
    </>
  );
};

export default MonthInfo;
