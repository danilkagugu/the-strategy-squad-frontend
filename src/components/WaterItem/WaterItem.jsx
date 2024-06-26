import css from "./WaterItem.module.css";
import sprite from "../../assets/icons.svg";

const WaterItem = () => {
  return (
    <div className={css.waterBox}>
      <svg className={css.iconGlass}>
        <use href={`${sprite}#icon-glass`}></use>
      </svg>
      <div className={css.infoBox}>
        <p className={css.infoMl}>250 ml</p>
        <p className={css.infoTime}>7:00 AM</p>
      </div>
      <div className={css.iconBox}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-edit`}></use>
        </svg>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-trash`}></use>
        </svg>
      </div>
    </div>
  );
};

export default WaterItem;
