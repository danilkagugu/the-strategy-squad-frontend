import ModalWrapper from '../ModalWrapper/ModalWrapper';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';

const UserSettingsModal = ({ isOpen, onCloseModal, modalRef }) => {
	return (
		<ModalWrapper
			modalIsOpen={isOpen}
			onCloseModal={onCloseModal}
			contentLabel='User Settings'
			top='5%'
			transform='translate(-50%, 0)'
		>
			<div ref={modalRef} className={css.modalContent}>
				<h3 className={css.title}>Setting</h3>
				<UserSettingsForm onClose={onCloseModal} />
			</div>
		</ModalWrapper>
	);
};

export default UserSettingsModal;
