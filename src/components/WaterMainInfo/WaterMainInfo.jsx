import style from "./WaterMainInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";

export default function WaterMainInfo() {
  return (
    <div className={style.box}>
      <h2>AquaTrack</h2>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
}
