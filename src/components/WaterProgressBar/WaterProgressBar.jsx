import style from "./WaterProgressBar.module.css";

export default function WaterProgressBar() {
  return (
    <div className={style.daily_info}>
      <p className={style.daily_info__liters}>Today</p>
      <p className={style.daily_info__text}> progress</p>
    </div>
  );
}
