import ModalWrapper from '../ModalWrapper/ModalWrapper';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';

const UserSettingsModal = ({ isOpen, onCloseModal }) => {
	return (
		<>
			<ModalWrapper
				modalIsOpen={isOpen}
				onCloseModal={onCloseModal}
				contentLabel='User Settings'
			>
				<div className={css.settingsModal}>
					<h3 className={css.title}>Setting</h3>
					<UserSettingsForm />
				</div>
			</ModalWrapper>
		</>
	);
};

export default UserSettingsModal;
