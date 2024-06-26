import css from "./WaterItem.module.css";
import sprite from "../../assets/icons.svg";

const title = "Edit the entered amount of water";
const text = "Correct entered data:";

const WaterItem = ({ item }) => {
  const { _id, time, amount } = item;

  return (
    <div className={css.waterBox}>
      <svg className={css.iconGlass}>
        <use href={`${sprite}#icon-glass`}></use>
      </svg>
      <div className={css.infoBox}>
        <p className={css.infoMl}> {amount}</p>
        <p className={css.infoTime}>{time.split("-")[3]}</p>
      </div>
      <div className={css.iconBox}>
        <button className={css.iconBtn}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-edit`}></use>
          </svg>
        </button>
        <button className={css.iconBtn}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-trash`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
