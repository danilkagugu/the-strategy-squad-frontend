import { useDispatch } from "react-redux";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { apiLogoutUser } from "../../redux/auth/operations";
import css from "./LogOutModal.module.css"





const LogOutModal = ({ modalIsOpen, onCloseModal }) => {
    const dispatch = useDispatch()
    const onLogOut = () => {
        dispatch(apiLogoutUser())

    }


    return (<>
        <ModalWrapper modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
            <div className={css.logOutModalWrapper}>
                <h2 className={css.logOutModalTitle} >Log out</h2>
                <p className={css.logOutModalText}>Do you really want to log out?</p>

                <div className={css.logOutModalBtnWrapper}>
                    <button className={css.logOutBtn} onClick={onLogOut}><p className={css.btnLogOutText}>Log out</p></button>
                    <button className={css.closeBtn} onClick={onCloseModal}><p className={css.btnCancelText}>Cancel</p></button>
                </div>
            </div>
        </ModalWrapper>


    </>
    )
}

export default LogOutModal;

// const openModal = () => {
//     setIsOpen(true);

//   }

//   const closeModal = () => {
//     // setIsOpen(false);
//     return

//   }