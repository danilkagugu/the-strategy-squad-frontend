import MonthInfo from "../MonthInfo/MonthInfo";
import DailyInfo from "../DailyInfo/DailyInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWaterPerDay } from "../../redux/water/operations";

const WaterDetailedInfo = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const currentDay = `${year}-${month}-${day}`;

  const [selectDay, setSelectDay] = useState(currentDay);
  const dispatch = useDispatch();

  const clickOnDay = (day) => {
    setSelectDay(day.toString().padStart(2, "0"));
    dispatch(getWaterPerDay(day.toString().padStart(2, "0")));
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
