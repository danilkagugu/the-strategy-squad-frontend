import { useTranslation } from "react-i18next";
import style from "./WaterDailyNorma.module.css";

export default function WaterDailyNorma({ dailyNorma }) {
  const { t } = useTranslation();
  return (
    <div className={style.daily_info}>
      <p className={style.daily_info__liters}>
        {dailyNorma} {t("l")}
      </p>
      <p className={style.daily_info__text}> {t("daily_norm")}</p>
    </div>
  );
}
