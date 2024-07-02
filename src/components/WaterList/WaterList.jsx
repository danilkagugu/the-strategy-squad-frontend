import WaterItem from "../WaterItem/WaterItem";
import css from "./WaterList.module.css";

import { useSelector } from "react-redux";
import { selectWaterPerDay } from "../../redux/water/selectors";
import { useTranslation } from "react-i18next";

const WaterList = ({ selectDay }) => {
  const { t } = useTranslation();
  const response = useSelector(selectWaterPerDay);

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
        <p className={css.text}>{t("water_yet")}.</p>
      )}
    </div>
  );
};

export default WaterList;
