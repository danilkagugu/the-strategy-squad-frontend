import { useState } from "react";
import css from "./WaterItem.module.css";
import sprite from "../../assets/icons.svg";
// import { WaterModal } from "../WaterModal/WaterModal";
//import { DeleteModal } from "../DeleteModal/DeleteModal";
//import { GlobalModal } from "../globalModal/globalModal";

export function WaterItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const openModalDelete = () => {
    setIsOpenDelete(true);
  };
  const closeModalDelete = () => {
    setIsOpenDelete(false);
  };

  const water =
    item.waterValue >= 999
      ? Math.round((item.waterValue / 1000) * 100) / 100 + " L"
      : item.waterValue + " ml";

  return (
    <div className={css.card}>
      <svg className={css.bottleIcon}>
        <use href={sprite + "#icon-water-glass"}></use>
      </svg>
      <div className={css.textBox}>
        <p className={css.ml}>{water}</p>
        <p className={css.time}>{item.localTime}</p>
      </div>
      <div className={css.btnBox}>
        <button className={css.button} type="button" onClick={openModal}>
          <svg className={css.btnIcon}>
            <use href={sprite + "#icon-edit"}></use>
          </svg>
        </button>
        <button className={css.button} type="button" onClick={openModalDelete}>
          <svg className={css.btnIcon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
      </div>

      {/* <div>
        <BaseModal isOpen={isOpen} onClose={closeModal}>
          <WaterModal mode={"edit"} onClose={closeModal} water={item} /> 
        </BaseModal>
      </div> */}

      {/* <GlobalModal
        isOpen={isOpenDelete}
        title={"Delete"}
        onRequestClose={closeModalDelete}
      > */}
        {/* <DeleteModal onRequestClose={closeModalDelete} water={item} /> */}
      {/* </GlobalModal> */}
    </div>
  );
}