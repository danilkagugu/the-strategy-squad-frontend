import MonthInfo from "../MonthInfo/MonthInfo";
import DailyInfo from "../DailyInfo/DailyInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import { useState } from "react";

const WaterDetailedInfo = () => {
  const [selectDay, setSelectDay] = useState(new Date().getDate());
  const [currentDate, setCurrentDate] = useState(new Date());

  const clickOnDay = (day) => {
    setSelectDay(day);
  };

  const getMonthName = (date) => {
    return date.toLocaleString("en-US", { month: "long" });
  };

  // Отримання назви поточного місяця
  const currentMonth = getMonthName(currentDate);

  let formedData;
  if (selectDay === new Date().getDate()) {
    formedData = "Today";
  } else {
    formedData = `${selectDay}, ${currentMonth}`;
  }

  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />

      <DailyInfo data={formedData} />
      <MonthInfo
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        clickOnDay={clickOnDay}
      />
    </div>
  );
};

export default WaterDetailedInfo;
