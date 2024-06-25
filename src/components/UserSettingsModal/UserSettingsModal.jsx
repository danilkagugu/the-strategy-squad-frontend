import ModalWrapper from "../ModalWrapper/ModalWrapper";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm";
import css from "./UserSettingsModal.module.css";

const UserSettingsModal = ({ isOpen, onCloseModal }) => {
  return (
    <>
      <ModalWrapper
        modalIsOpen={isOpen}
        onCloseModal={onCloseModal}
        contentLabel="User Settings"
        top="10%"
        transform="translate(-50%, 0)"
      >
        <div>
          <h3 className={css.title}>Setting</h3>
          <UserSettingsForm />
        </div>
      </ModalWrapper>
    </>
  );
};

export default UserSettingsModal;
