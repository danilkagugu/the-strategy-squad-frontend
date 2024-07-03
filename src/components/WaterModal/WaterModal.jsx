import WaterForm from "../WaterForm/WaterForm";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

import css from "./WaterModal.module.css";
import { useTranslation } from "react-i18next";

const WaterModal = ({
  isOpen,
  onCloseModal,
  title,
  text,
  onSubmitData,
  initialState,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <h2 className={css.mainTitle}>{title || t("add_water")}</h2>
        <h3 className={css.title}>{text || t("choose_value")}</h3>
        <WaterForm onSubmitData={onSubmitData} initialState={initialState} />
      </ModalWrapper>
    </>
  );
};

export default WaterModal;
