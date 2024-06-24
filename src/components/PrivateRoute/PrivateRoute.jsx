import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "../../redux/auth/selectors";


const PrivateRoute = ({ children, redirectTo = "/signin" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefresh);

    return !isLoggedIn && !isRefreshing ? (
        <Navigate to={redirectTo} replace />
    ) : (
        children
    );
};

export default PrivateRoute;