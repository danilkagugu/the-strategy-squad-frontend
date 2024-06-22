import style from "./WaterDailyNorma.module.css";

export default function WaterDailyNorma() {
  return (
    <div className={style.daily_info}>
      <p className={style.daily_info__liters}>1.5 L</p>
      <p className={style.daily_info__text}> My daily norma</p>
    </div>
  );
}
