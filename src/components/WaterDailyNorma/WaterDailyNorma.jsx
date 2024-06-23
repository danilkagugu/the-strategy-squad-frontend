import style from "./WaterDailyNorma.module.css";

export default function WaterDailyNorma({ dailyNorma }) {
  return (
    <div className={style.daily_info}>
      <p className={style.daily_info__liters}>{dailyNorma} L</p>
      <p className={style.daily_info__text}> My daily norma</p>
    </div>
  );
}
