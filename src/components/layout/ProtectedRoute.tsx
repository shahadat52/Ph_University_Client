import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";


const ProtectedRoute = ({ children }:any) => {
    const { token, user } = useAppSelector((state) => state.auth)
    if (!token) {
        return <Navigate to='/login' replace></Navigate>
    }
    return children;
};

export default ProtectedRoute;