import css from "./WaterItem.module.css";
import sprite from "../../assets/icons.svg";

const WaterItem = ({ item }) => {
  console.log(item.data);
  return (
    <ul className={css.itemList}>
      {item && item.data && Array.isArray(item.data) && item.data.length > 0
        ? item.data.map((data) => (
            <li key={data._id}>
              <div className={css.waterBox}>
                <svg className={css.iconGlass}>
                  <use href={`${sprite}#icon-glass`}></use>
                </svg>
                <div className={css.infoBox}>
                  <p className={css.infoMl}> {data.amount}</p>
                  <p className={css.infoTime}>{data.time.split("-")[3]}</p>
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
            </li>
          ))
        : null}
    </ul>
  );
};

export default WaterItem;
