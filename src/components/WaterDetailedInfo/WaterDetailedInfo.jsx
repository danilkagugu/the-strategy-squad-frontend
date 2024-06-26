import MonthInfo from "../MonthInfo/MonthInfo";
import DailyInfo from "../DailyInfo/DailyInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import { useState } from "react";
import { useState } from "react";

const WaterDetailedInfo = () => {
  const [currentDateFromMonthInfo, setCurrentDateFromMonthInfo] = useState(
    new Date()
  );

  const [clickedDay, setClickedDay] = useState(null);

  const handleDayClick = (day, currentDate) => {
    setCurrentDateFromMonthInfo(currentDate);
    setClickedDay(day);
  };

  const getMonthName = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };
  const formattedDate = clickedDay
    ? `${clickedDay}, ${getMonthName(currentDateFromMonthInfo)}`
    : "Today";

  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />

      <DailyInfo data={formattedDate} />
      <MonthInfo
        onDayClick={(day, currentDate) => handleDayClick(day, currentDate)}
      />
    </div>
  );
};

export default WaterDetailedInfo;
