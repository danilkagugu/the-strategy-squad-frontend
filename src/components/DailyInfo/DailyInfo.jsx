import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import ChooseDate from "../ChooseDate/ChooseDate";
import css from "../AddWaterBtn/AddWaterBtnDaily.module.css";
import style from "./DailyInfo.module.css";
import { useState } from "react";
import scrollController from "../../services/noScroll";
import { WaterList } from "../WaterList/WaterList";
// import WaterModal from "../WaterModal/WaterModal";
export default function DailyInfo() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }
  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }
  return (
    <div className={style.main}>
      {/* {isOpen && <WaterModal onCloseModal={closeModal} isOpen={isOpen} />} */}
      <div className={style.box_flex}>
        <ChooseDate />
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
      <WaterList />
    </div>
  );
}
