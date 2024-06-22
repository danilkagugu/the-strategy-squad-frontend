import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import ChooseDate from "../ChooseDate/ChooseDate";
import WaterList from "../WaterList/WaterList";
import css from "../AddWaterBtn/AddWaterBtnDaily.module.css";
import style from "./DailyInfo.module.css";
export default function DailyInfo() {
  return (
    <div className={style.main}>
      <div className={style.box_flex}>
        <ChooseDate />
        <AddWaterBtn
          buttonStyle={css.btn}
          svgStyle={css.svg_plus}
          textStyle={css.text}
          iconName="plusGreen"
        />
      </div>
      <WaterList />
    </div>
  );
}
