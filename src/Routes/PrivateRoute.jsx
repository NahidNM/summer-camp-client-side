import useAuth from "./../Hooks/useAuth"
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
   
        const { user, loading } =useAuth();
        console.log(user)
    const location = useLocation();

    if(loading){
        return <progress className="w-56 progress"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;