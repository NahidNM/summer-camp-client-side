
import useAuth from "../../../Hooks/useAuth";

import SectionTitle from "../../../component/SectionTitle";
import { useEffect, useState } from "react";
// import MyAddClassCart from "./MyAddClassCart";
import { Helmet } from "react-helmet-async";
// import { FaTrashAlt } from "react-icons/fa";

const MyAddClass = () => {

  const {user} = useAuth();
 const [myAddClasses, setMyAddClasses] = useState()


  useEffect(()=>{
    fetch(`http://localhost:5000/myaddclass`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const addClasses = data.filter(myAddClass => myAddClass.email === user.email)
      console.log(myAddClasses)
      setMyAddClasses(addClasses)
    })
  },[])

  

    return (
        <div className="w-full">
          
          <div className="w-full">
            <Helmet>
                <title>Summer Sports | Enroll Class</title>
            </Helmet>
            <SectionTitle title="All My Create Class"></SectionTitle>
        
            {/* <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-100 rounded-lg ">
                <h3 className="text-3xl">Total Enroll: {addClasses.length}</h3> 
            </div> */}
            <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr className="text-xl">
                            <th>#</th>
                            <th>Class </th>
                            <th>Instructor</th>                           
                            <th>Status</th>                           
                            <th>Action</th>                          
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                           myAddClasses?.map((item, index) => <tr
                                key={item._id}
                            >
                                <td className="">
                                    {index + 1}
                                </td>
                                <td>
                                 
                                        <div className="avatar">
                                        <div className="w-20 h-20 mask mask-squircle">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                         </div>
                                        <div className="ml-5">
                                            <h1 className="font-semibold">Name : {item.name}</h1>
                                    <p>Price : ${item.price}</p>
                                        <p> Seats : {item.available_seats}</p>  
                                    </div>
                                    </div> 
                                </td>
                                
                                <td className="">
                                    <div className="">
                                    <h1 className="font-semibold">{item.instructor}</h1>
                                    <h1>  {item.email}</h1>                                 
                                    </div>
                                </td>
                                <td>{item.status}</td>
                                <td className="">
                                   
                                   <button className="text-white bg-indigo-700 btn btn-ghost">Update</button> 
                                     <button className="mx-3 text-white bg-red-600 btn btn-ghost">Delete</button>
                                    
                                   
                                </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
          
        </div>
    );
};

export default MyAddClass;