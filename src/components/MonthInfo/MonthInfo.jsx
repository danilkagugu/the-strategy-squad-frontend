//! Відображається на сторінці /test

import { useEffect, useState } from "react";
import CalendarPagination from "../CalendarPagination/CalendarPagination";
import Calendar from "../Calendar/Calendar";
import css from "./MonthInfo.module.css";
import Recharts from "../Recharts/Recharts";

// const month = {
//   0: "January",
//   1: "February",
//   2: "March",
//   3: "April",
//   4: "May",
//   5: "June",
//   6: "July",
//   7: "August",
//   8: "September",
//   9: "October",
//   10: "November",
//   11: "December",
// };

const MonthInfo = () => {
  const [openRecharts, setOpenRecharts] = useState(false);
  const toogleOpenRecharts = () => {
    setOpenRecharts((prevState) => !prevState);
  };
  // console.log(openRecharts);
  // const randomNumber = () => {
  //   return Math.floor(Math.random() * 101);
  // };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayInMounth, setDayInMounth] = useState([]);
  // const [percent, setPercent] = useState([randomNumber()]);
  // for (let i = 1; i <= currentDate.getDate(); i++) {
  //   arrayPercent.push(randomNumber());
  // }
  // const currentMonth = month[currentDate.getMonth()];
  // console.log(currentMonth);
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

  const dataRecharts = dayInMounth.map((day) => ({
    date: day,
    // value: getAmountForDay(dayInMounth),
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
          <Calendar day={dayInMounth} />
        )}
      </div>
    </>
  );
};

export default MonthInfo;
