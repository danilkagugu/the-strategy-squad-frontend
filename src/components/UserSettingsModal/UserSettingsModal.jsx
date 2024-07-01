import { useTranslation } from "react-i18next";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm";
import css from "./UserSettingsModal.module.css";

const UserSettingsModal = ({
  isOpen,
  onCloseModal,
  modalRef,
  closeSetings,
}) => {
  const { t } = useTranslation();
  return (
    <ModalWrapper
      modalIsOpen={isOpen}
      onCloseModal={onCloseModal}
      contentLabel="User Settings"
      top="5%"
      transform="translate(-50%, 0)"
    >
      <div ref={modalRef} className={css.modalContent}>
        <h3 className={css.title}>{t("setting")}</h3>
        <UserSettingsForm onClose={onCloseModal} closeSetings={closeSetings} />
      </div>
    </ModalWrapper>
  );
};

export default UserSettingsModal;
