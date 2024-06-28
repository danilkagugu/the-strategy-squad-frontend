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
import { convertMonthsNumberToStr } from "../../services/currentDay";
import { numberOfDay } from "../../services/currentDay";
import { convertTime } from "../../services/currentDay";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { selectError } from "../../redux/water/selectors";

export default function DailyInfo({ selectDay }) {
  const [isOpen, setIsOpen] = useState(false);

  // const responseError = useSelector(selectError);
  // console.log(responseError);

  // if (responseError) {
  //   toast.error(responseError);
  // }

  const selectedMonth = String(selectDay.slice(5, 7));
  const selectedDay = selectDay.slice(-2);
  const selectedData = `${numberOfDay(selectedDay)}, ${convertMonthsNumberToStr(
    selectedMonth
  )}`;

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
    // try {
    const time = convertTime(data.time);
    addNewWater({
      ...data,
      time: `${selectDay}-${time}`,
      amount: counter,
    });
    closeModal();
    //   toast.success("You add water successfully.");
    // } catch (er) {
    //   console.log(er);
    //   console.log(responseError);
    //   toast.error(responseError);
    // }
  };

  return (
    <div className={style.main}>
      {isOpen && (
        <WaterModal
          onCloseModal={closeModal}
          isOpen={isOpen}
          onSubmitData={onSubmitData}
        />
      )}
      <div className={style.box_flex}>
        <ChooseDate data={selectedData} />
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
