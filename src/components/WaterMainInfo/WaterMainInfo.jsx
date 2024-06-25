import style from "./WaterMainInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import Logo from "../Logo/Logo";
import css from "../AddWaterBtn/AddWaterBtn.module.css";
import { useState } from "react";
import WaterModal from "../WaterModal/WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch } from "react-redux";
import { addWaterRecord } from "../../redux/water/operations";

let data = new Date();
let year = data.getFullYear();
let month = String(data.getMonth() + 1).padStart(2, "0");
let day = String(data.getDate()).padStart(2, "0");
let currentDay = `${year}-${month}-${day}`;

export default function WaterMainInfo() {
  const [dailyNorma, setDailyNorma] = useState("2.0"); //денна норма води
  const [drunkWater, setDrunkWater] = useState("470"); //кількість випитої води в день
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
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
  const dailyNormaNum = parseFloat(dailyNorma.replace(",", ".")) * 1000;
  const drunkWaterNum = parseFloat(drunkWater);

  let progress = (drunkWaterNum / dailyNormaNum) * 100;
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  const onSubmitData = (data, counter) => {
    addNewWater({
      ...data,
      time: `${currentDay}-${data.time}`,
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
      <Logo />
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
