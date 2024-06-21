
import css from './AuthLayout.module.css';

const AuthLayout = ({ children }) => {
    return (
        <div className={css.authContainer}>
            <main className={css.content}>{children}</main>
        </div>
    );
};

export default AuthLayout;
