import { useContext } from "react";
import { Navigate } from 'react-router-dom'
import { ContextProvider } from "./auth/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ContextProvider);

    if (loading) {
        <span className="loading loading-spinner loading-lg"></span>
    } else {

        if (!user) {
            return <Navigate state={location.pathname} to='/login'></Navigate>
        }else{
            return children;
        }
        
    }
};

export default PrivateRoute;