import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useManage = () => {
    const  {user, loading} = useAuth();
    const [axiosSecure] =useAxiosSecure()
    
        const { refetch, data: classesmanages = [] } = useQuery({
            queryKey: ['classesmanage', user?.email],
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure('/classesmanage')
                // console.log('res from axios', res)
               
                return res.data;
            },
        })
        return [classesmanages, refetch]
    };

export default useManage;