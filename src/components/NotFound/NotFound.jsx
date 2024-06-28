import { NavLink } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.box}>
      <p className={css.whoops}>Whoops!</p>
      <p className={css.pageNotFound}>Page not found</p>

      <NavLink to="/" className={css.btnHome}>
        Home
      </NavLink>
    </div>
  );
};

export default NotFound;
