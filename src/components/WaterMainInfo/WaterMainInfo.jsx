import style from "./WaterMainInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import Logo from "../Logo/Logo";

export default function WaterMainInfo() {
  return (
    <div className={style.box}>
      <Logo />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </div>
  );
}
