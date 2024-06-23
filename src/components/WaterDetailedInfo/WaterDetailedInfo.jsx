import MonthInfo from "../MonthInfo/MonthInfo";
import UserPanel from "../UserPanel/UserPanel";
import css from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfo}>
      <UserPanel />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
