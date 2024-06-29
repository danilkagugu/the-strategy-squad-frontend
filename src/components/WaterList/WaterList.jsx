import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";

import { useSelector } from "react-redux";
import { selectWaterPerDay } from "../../redux/water/selectors";
// import { useEffect } from "react";
// import { getWaterPerDay } from "../../redux/water/operations";

const WaterList = ({ selectDay }) => {
  // const dispatch = useDispatch();
  const response = useSelector(selectWaterPerDay);

  // useEffect(() => {
  //   if (selectDay) {
  //     dispatch(getWaterPerDay(selectDay));
  //   }
  // }, [dispatch, selectDay]);

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
