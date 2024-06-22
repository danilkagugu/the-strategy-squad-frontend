//! Відображається на сторінці /test

import { useEffect, useState } from "react";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import css from "./MonthInfo.module.css";
// import Recharts from "../Recharts/Recharts";

const MonthInfo = () => {
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
  // console.log(arrayPercent);
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
  return (
    <>
      <div className={css.block}>
        <CalendarPagination
          dateNow={currentDate}
          prevMounth={prevMounth}
          nextMounth={nextMounth}
        />
        <Calendar day={dayInMounth} randomNumber={arrayPercent} />
      </div>
      {/* <Recharts dayOfMouth={dayInMounth} percentWater={arrayPercent} /> */}
    </>
  );
};

export default MonthInfo;
