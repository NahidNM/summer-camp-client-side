// import { useQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import { useEffect, useState } from "react";

const useClass = () =>



{
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');

    const [axiosSecure] = useAxiosSecure(); 

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/classes')
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [classes, refetch]

}


//  {
//  const [menu, setMenu] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch(' https://summer-sports-camp-server.vercel.app/classes')
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data)
//                 setMenu(data);

//                 setLoading(false);
//             });
//     }, [])
//     return [menu, loading]
// }



// {
//     const {data: classes = [], isLoading: loading, refetch} = useQuery({
//         queryKey: ['classes'],
//         queryFn: async() => {
//             const res = await fetch('/classes');
//             return res.json();
            
//         }
//     })
   
//     return [classes, loading, refetch]
// };

export default useClass;