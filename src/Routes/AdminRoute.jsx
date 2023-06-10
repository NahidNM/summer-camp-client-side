
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth()
   const [isAdmin, isAdminLoading] = useAdmin(); 
    console.log('shdsdialifla',isAdmin)
    const location = useLocation(); 
    // console.log(location)
    if(loading || isAdminLoading){
        return  <div className='flex items-center justify-center pt-20 text-2xl font-semibold'>
            <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    /></div>
    }
       if(user && isAdmin){
        return children;
       }
       return <Navigate state={{from: location}} to="/"  replace></Navigate>
};

export default AdminRoute;