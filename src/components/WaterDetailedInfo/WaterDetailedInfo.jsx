import MonthInfo from "../MonthInfo/MonthInfo";
import DailyInfo from "../DailyInfo/DailyInfo";

import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import { useState } from "react";

const WaterDetailedInfo = () => {
  const date = new Date();
  const currentDay = date.getDate().toString().padStart(2, "0");

  const [selectDay, setSelectDay] = useState(currentDay);
  // console.log(selectDay);
  const clickOnDay = (day) => {
    setSelectDay(day.toString().padStart(2, "0"));
  };
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />

      <DailyInfo selectDay={selectDay} />

      <MonthInfo clickOnDay={clickOnDay} />
    </div>
  );
};

export default WaterDetailedInfo;
