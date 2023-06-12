import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEnroll = () => {
const  {user, loading} = useAuth();
const [axiosSecure] =useAxiosSecure()

    const { refetch, data: enrollClasses = [] } = useQuery({
        queryKey: ['enrollclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/enrollclass')
            // console.log('res from axios', res)
           
            return res.data;
        },
    })
    return [enrollClasses, refetch]
};

export default useEnroll;