import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';

const UserSettingsModal = ({ onClose }) => {
	return (
		<div className={css.settingsModal}>
			<h3 className={css.title}>Setting</h3>
			<UserSettingsForm onClose={onClose} />
		</div>
	);
};

export default UserSettingsModal;
