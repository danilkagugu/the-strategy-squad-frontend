import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectWaterPerDay } from "../../redux/water/selectors";
import { useEffect } from "react";
import { getWaterPerDay } from "../../redux/water/operations";

const WaterList = ({ selectDay }) => {
  const dispatch = useDispatch();
  const response = useSelector(selectWaterPerDay);

  useEffect(() => {
    if (selectDay) {
      dispatch(getWaterPerDay(selectDay));
    }
  }, [dispatch, selectDay]);

  return (
    <div className={css.container}>
      {response.data &&
      Array.isArray(response.data) &&
      response.data.length > 0 ? (
        <ul className={css.itemList}>
          {response.data.map((item) => (
            <li key={item._id}>
              <WaterItem item={item} selectDay={selectDay} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>There are no water yet.</p>
      )}
    </div>
  );
};

export default WaterList;
/*    <ul>
      {item.length > 0
        ? item.map((data) => (
            <li key={data._id}>
              <div className={styles.waterBox}>
                <svg className={styles.iconGlass}>
                  <use href={`${sprite}#icon-glass`}></use>
                </svg>
                <div className={styles.infoBox}>
                  <p className={styles.infoMl}> {data.amount}</p>
                  <p className={styles.infoTime}>{data.time}</p>
                </div>
                <div className={styles.iconBox}>
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-edit`}></use>
                  </svg>
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-trash`}></use>
                  </svg>
                </div>
              </div>
            </li>
          ))
        : null}
    </ul> */
