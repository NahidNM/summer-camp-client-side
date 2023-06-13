import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import useVarifyInstructor from "../Hooks/useVarifyInstructor";

const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth()
   const [isInstructor, isInstructorLoading] = useVarifyInstructor()
    // console.log(isInstructor)
    const location = useLocation(); 
    // console.log(location)
    if(loading || isInstructorLoading){
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
       if(user && isInstructor){
        return children;
       }
       return <Navigate state={{from: location}} to="/"  replace></Navigate>
};

export default InstructorRoute;