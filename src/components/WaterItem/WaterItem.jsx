import { useState } from "react";
import css from "./WaterItem.module.css";
import sprite from "../../assets/icons.svg";
import WaterModal from "../../components/WaterModal/WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch } from "react-redux";
import { editWaterRecord } from "../../redux/water/operations";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import { convertTimeToAMPM } from "../../services/currentDay";
import { convertTime } from "../../services/currentDay";
import { useTranslation } from "react-i18next";

const WaterItem = ({ item, selectDay }) => {
  const { t } = useTranslation();
  const text = `${t("correct_data")}:`;
  const title = t("edit_amount_water");
  const { _id, time, amount } = item;

  const initialTime = convertTimeToAMPM(time.slice(-5));

  // const date = new Date(item);
  // console.log(date);

  // const formattedTime = date.toLocaleTimeString("en-US", {
  //   hour: "numeric",
  //   minute: "2-digit",
  //   hour12: true,
  // });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  function openModalDelete() {
    setIsOpenDelete(true);
    scrollController.disabledScroll();
  }

  function closeModalDelete() {
    setIsOpenDelete(false);
    scrollController.enabledScroll();
  }

  const onSubmitData = (data, counter, time) => {
    const fullData = `${selectDay}-${convertTime(time)}`;
    dispatch(
      editWaterRecord({
        ...data,
        amount: counter,
        time: fullData,
        id: _id,
      })
    );
    closeModal();
  };

  return (
    <>
      <div className={css.waterBox}>
        <div className={css.iconGlassWrapper}>
          <svg className={css.iconGlass}>
            <use href={`${sprite}#icon-glass`}></use>
          </svg>
        </div>
        <div className={css.infoBox}>
          <p className={css.infoMl}>
            {amount} {t("ml")}
          </p>
          <p className={css.infoTime}>{initialTime}</p>
        </div>
        <div className={css.iconBox}>
          <button className={css.iconBtn} onClick={openModal}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-edit`}></use>
            </svg>
          </button>
          <button className={css.iconBtn} onClick={openModalDelete}>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </button>
        </div>
      </div>
      <WaterModal
        onCloseModal={closeModal}
        isOpen={isOpen}
        title={title}
        text={text}
        onSubmitData={onSubmitData}
        initialState={{ time: initialTime, amount }}
      />
      <DeleteWaterModal
        modalIsOpen={isOpenDelete}
        onCloseModal={closeModalDelete}
        id={_id}
      />
    </>
  );
};

export default WaterItem;
