import MonthInfo from "../MonthInfo/MonthInfo";
import DailyInfo from "../DailyInfo/DailyInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";
import { useDispatch } from "react-redux";
import { getWaterPerDay } from "../../redux/water/operations";

const WaterDetailedInfo = ({ selectDay, setSelectDay }) => {
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
