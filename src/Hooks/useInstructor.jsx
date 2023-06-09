import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructors, setInstructor] = useState([]);
       const [loading, setLoading] = useState(true);
       useEffect(() => {
           fetch('http://localhost:5000/insturctor')
               .then(res => res.json())
               .then(data => {
                //    console.log(data)
                   setInstructor(data);
   
                   setLoading(false);
               });
       }, [])
       return [instructors, loading]
   }

export default useInstructor;