import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import ChooseDate from "../ChooseDate/ChooseDate";
import WaterList from "../WaterList/WaterList";
import css from "../AddWaterBtn/AddWaterBtnDaily.module.css";
import style from "./DailyInfo.module.css";
import { useState } from "react";
import WaterModal from "../WaterModal/WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch } from "react-redux";
import { addWaterRecord } from "../../redux/water/operations";
// import { currentDay } from "../../services/currentDay";
import { currentTime } from "../../services/currentDay";
import { convertMonthsNumberToStr } from "../../services/currentDay";

const selectDay = "2024-06-20";

export default function DailyInfo() {
  // console.log(selectDay);

  const month = "11";
  console.log(convertMonthsNumberToStr(5));
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

  const onSubmitData = (data, counter) => {
    addNewWater({
      ...data,
      time: `${selectDay}-${data.time}`,
      amount: counter,
    });
    closeModal();
  };

  return (
    <div className={style.main}>
      {isOpen && (
        <WaterModal
          onCloseModal={closeModal}
          isOpen={isOpen}
          onSubmitData={onSubmitData}
          initialState={{ amount: 50, time: `${currentTime()}` }}
        />
      )}
      <div className={style.box_flex}>
        <ChooseDate data={selectDay} />
        <AddWaterBtn
          buttonStyle={css.btn}
          svgStyle={css.svg_plus}
          textStyle={css.text}
          svg_plus_hover={css.svg_plus_hover}
          iconName="plusGreen"
          hoverIconName="plusGrey"
          openModal={openModal}
        />
      </div>
      <WaterList selectDay={selectDay} />
    </div>
  );
}
