import MonthInfo from "../MonthInfo/MonthInfo";
// import DailyInfo from "../DailyInfo/DailyInfo";
import TestDailyInfo from "../DailyInfo/TestDailyInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import { useState } from "react";

const WaterDetailedInfo = () => {
  const currentDate = new Date();
  const [selectDay, setSelectDay] = useState(currentDate.getDate());
  console.log(selectDay);
  const clickOnDay = (day) => {
    setSelectDay(day);
  };
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />

      {/* <DailyInfo selectDay={selectDay} /> */}
      <TestDailyInfo selectDay={selectDay} />
      <MonthInfo clickOnDay={clickOnDay} />
    </div>
  );
};

export default WaterDetailedInfo;
