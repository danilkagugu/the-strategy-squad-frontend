import style from "./WaterMainInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import Logo from "../Logo/Logo";
import css from "../AddWaterBtn/AddWaterBtn.module.css";
import { useEffect, useState } from "react";
import WaterModal from "../WaterModal/WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch, useSelector } from "react-redux";
import { addWaterRecord } from "../../redux/water/operations";
import { currentDay } from "../../services/currentDay";
import { convertTime } from "../../services/currentDay";
import { selectUserData } from "../../redux/auth/selectors";
import { selectWaterPerDay } from "../../redux/water/selectors";
import LanguageSelector from "../i18n/LanguageSelector";

export default function WaterMainInfo() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUserData);
  const waters = useSelector(selectWaterPerDay);
  const [todayWaterAmount, setTodayWaterAmount] = useState(0);

  const todayData = currentDay();

  useEffect(() => {
    if (waters) {
      const todayWaters = waters.data.filter((item) => {
        const itemDate = item.time.split("-").slice(0, 3).join("-");
        return itemDate === todayData;
      });

      if (todayWaters.length > 0) {
        const totalTodayWater = todayWaters.reduce(
          (total, item) => total + item.amount,
          0
        );
        setTodayWaterAmount(totalTodayWater);
      }
    }
  }, [waters, todayData]);

  const dailyNorma = user?.waterNorm
    ? (user.waterNorm / 1000).toFixed(1)
    : "2.0";

  let progress = 0;
  if (todayWaterAmount > 0) {
    progress = ((todayWaterAmount / user.waterNorm) * 100).toFixed(1);
    if (progress < 0) progress = 0;
    if (progress > 100) progress = 100;
  }
  const addNewWater = (newWater) => {
    dispatch(addWaterRecord(newWater));
  };

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }
  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  const onSubmitData = (data, counter) => {
    const time = convertTime(data.time);
    addNewWater({
      ...data,
      time: `${todayData}-${time}`,
      amount: counter,
    });
    closeModal();
  };

  return (
    <div className={style.box}>
      {isOpen && (
        <WaterModal
          onCloseModal={closeModal}
          isOpen={isOpen}
          onSubmitData={onSubmitData}
        />
      )}
      <div className={style.header}>
        <Logo />
        <LanguageSelector />
      </div>
      <WaterDailyNorma dailyNorma={dailyNorma} />
      <WaterProgressBar progress={progress} />
      <AddWaterBtn
        buttonStyle={css.btn}
        svgStyle={css.svg_plus}
        textStyle={css.text}
        iconName="plus"
        openModal={openModal}
      />
    </div>
  );
}
