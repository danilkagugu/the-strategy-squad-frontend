import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefresh);

    return !isLoggedIn && !isRefreshing ? (
        <Navigate to={redirectTo} replace />
    ) : (
        children
    );
};

export default PrivateRoute;

