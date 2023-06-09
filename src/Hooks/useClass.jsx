// import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";

const useClass = () =>
 {
 const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMenu(data);

                setLoading(false);
            });
    }, [])
    return [menu, loading]
}
// {
//     const {data: classes = [], isLoading: loading, refetch} = useQuery({
//         queryKey: ['classes'],
//         queryFn: async() => {
//             const res = await fetch('class.json');
//             return res.json();
            
//         }
//     })
   
//     return [classes, loading, refetch]
// };

export default useClass;