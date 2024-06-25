import sprite from "../../assets/icons.svg";
import css from "./UserBarPopover.module.css";
import LogOutModal from "../LogOutModal/LogOutModal"



const UserBarPopover = ({ modalIsOpen, onCloseModal, openModal }) => {


	return (
		<div className={css.barPopover}>
			<button className={css.btnBar}>
				<svg className={css.icon}>
					<use href={`${sprite}#icon-settings`}></use>
				</svg>
				<p className={css.textBarPopover}>Setting</p>
			</button>
			<button className={css.btnBar} onClick={openModal}>
				<svg className={css.icon}>
					<use href={`${sprite}#icon-log-out`}></use>
				</svg>
				<p className={css.textBarPopover}>Log out</p>
			</button>
			{modalIsOpen && <LogOutModal modalIsOpen={modalIsOpen} onCloseModal={onCloseModal} />}

		</div>
	);
};

export default UserBarPopover;
