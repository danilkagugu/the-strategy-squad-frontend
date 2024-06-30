
import { BASE_URL } from '../../services/authApi';
import { FcGoogle } from 'react-icons/fc';

import css from './GoogleBtn.module.css';

const GoogleBtn = ({ type }) => {
    return (
        <>

            <div className={css.googleContiner}>
                <p className={css.chooseText}>Or</p>
                <a
                    className={css.googleLink}
                    href={`${BASE_URL}/api/auth/google`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className={css.logoGoogleContainer}>
                        <span className={css.logoGoogleWrapper}>
                            <span className={css.logoGoogleWrappe2}>
                                <FcGoogle className={css.googleIcon} />
                            </span>
                        </span>
                    </span>
                    <span className={css.textLogoGoogle}>Sign {type} with Google</span>
                </a>
            </div>
        </>
    );
};

export default GoogleBtn;



// import { BASE_URL } from '../../services/authApi';
// import { FcGoogle } from 'react-icons/fc';

// import css from './GoogleBtn.module.css';

// const GoogleBtn = ({ type, className }) => {
//     const handleGoogleLogin = () => {
//         window.location.href = `${BASE_URL}/api/auth/google`;
//     };

//     return (
//         <button
//             className={`${css.googleBtn} ${className}`}
//             onClick={handleGoogleLogin}
//         >
//             <FcGoogle className={css.googleIcon} /> Sign {type} with Google
//         </button>
//     );
// };

// export default GoogleBtn;


