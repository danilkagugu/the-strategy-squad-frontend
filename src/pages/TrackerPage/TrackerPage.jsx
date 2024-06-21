import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import style from "./TrackerPage.module.css";
const TrackerPage = () => {
  return (
    <>
      <div className={style.page_box}>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </div>
    </>
  );
};

export default TrackerPage;
