import style from "./AddWaterBtn.module.css";
import sprite from "../../assets/icons.svg";
export default function AddWaterBtn() {
  return (
    <button className={style.btn}>
      <svg className={style.svg_plus}>
        <use href={`${sprite}#plus`}></use>
      </svg>
      <p className={style.text}>Add water</p>
    </button>
  );
}
