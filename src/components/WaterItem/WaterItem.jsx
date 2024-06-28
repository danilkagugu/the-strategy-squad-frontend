import { useState } from "react";
import css from "./WaterItem.module.css";
import sprite from "../../assets/icons.svg";
import WaterModal from "../../components/WaterModal/WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch } from "react-redux";
import { editWaterRecord } from "../../redux/water/operations";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";

const title = "Edit the entered amount of water";
const text = "Correct entered data:";

const WaterItem = ({ item, selectDay }) => {
  const { _id, time, amount } = item;

  const initialTime = time.slice(-5);

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
    const fullData = `${selectDay}-${time}`;
    dispatch(
      editWaterRecord({ ...data, amount: counter, time: fullData, id: _id })
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
          <p className={css.infoMl}> {amount} ml</p>
          <p className={css.infoTime}>{time.split("-")[3]} AM</p>
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
