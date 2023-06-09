import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useCart = () => {
    const {user} = useAuth();
    // const [] = useAxio 
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['addClasses', user?.email],
        // enabled: !loading,
        // queryFn: async () => {
        //     const res = await axiosSecure(`/classes?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addClasses?email=${user.email}`)
            return res.json();
        }
    })

    return [cart, refetch]

}

export default useCart;