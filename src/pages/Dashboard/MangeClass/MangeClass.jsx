import { Helmet } from "react-helmet-async";
import useManage from "../../../Hooks/useManage";
import SectionTitle from "../../../component/SectionTitle";
import Swal from "sweetalert2";


const MangeClass = () => {
    
    const [classesmanages] = useManage();
    console.log("manage",classesmanages);
    
    const handleAprove = data  =>{
        fetch(`http://localhost:5000/adminapprove/${data._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({data})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.medifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div className="w-full">
            
            <div className="w-full">
            <Helmet>
                <title>Summer Sports | Enroll Class</title>
            </Helmet>
            <SectionTitle title="Manage Class"></SectionTitle>
        
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-100 rounded-lg ">
                <h3 className="text-3xl">Total Enroll: {classesmanages.length}</h3> 
            </div>
            <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>                          
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            classesmanages.map((item, index) => <tr
                                key={item._id}
                            >
                                <td className="">
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 h-12 mask mask-squircle">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">${item.price}</td>
                                <td className="gap-3">
                                    <button onClick={()=>handleAprove(item)} className="text-white bg-red-600 btn btn-ghost">Aprove</button>
                                    <button className="mx-3 text-white bg-red-600 btn btn-ghost">Deny</button>
                                    <button className="text-white bg-red-600 btn btn-ghost">
                                        Feedback</button>
                                    
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

export default MangeClass;