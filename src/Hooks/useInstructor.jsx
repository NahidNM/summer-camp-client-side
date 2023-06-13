import { useEffect, useState } from "react";




const useInstructor = () => {
    const [menu, setMenu] = useState([]);
       const [loading, setLoading] = useState(true);
       useEffect(() => {
           fetch(' http://localhost:5000/insturctor')
               .then(res => res.json())
               .then(data => {
                   // console.log(data)
                   setMenu(data);
   
                   setLoading(false);
               });
       }, [])
       return [menu, loading]
   }

export default useInstructor;