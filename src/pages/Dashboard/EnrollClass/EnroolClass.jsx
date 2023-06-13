import { Helmet } from "react-helmet-async";
import useEnroll from "../../../Hooks/useEnroll";
import SectionTitle from "../../../component/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const EnroolClass = () => {
    
    const {user} =useAuth();
    
    
    const [enrollClasses, refetch] = useEnroll()
    // console.log(enrollClasses)
   const enrollClass = enrollClasses?.filter(enrollClass => enrollClass.email === user.email)
    
    const handleEnrollDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` http://localhost:5000/payment/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Sports | Enroll Class</title>
            </Helmet>
            <SectionTitle title="All Enroll Class"></SectionTitle>
        
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-100 rounded-lg ">
                <h3 className="text-3xl">Total Enroll: {enrollClass.length}</h3> 
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
                           enrollClass?.map((item, index) => <tr
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
                                    <button onClick={()=>handleEnrollDelete(item)} className="text-white bg-red-600 btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                                    
                                </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnroolClass;