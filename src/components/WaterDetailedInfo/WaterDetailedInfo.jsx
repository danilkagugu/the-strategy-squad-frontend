import MonthInfo from "../MonthInfo/MonthInfo";
import DailyInfo from "../DailyInfo/DailyInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />

      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
