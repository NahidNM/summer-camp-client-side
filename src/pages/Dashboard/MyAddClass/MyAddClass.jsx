
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../component/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const MyAddClass = () => {

  const {user} = useAuth();

 const [axiosSecure] = useAxiosSecure()
 const { register, handleSubmit,  } = useForm();

const { data: addClasses= [], refetch } = useQuery(['myaddclass'], async () => {
    const res = await axiosSecure.get('/myaddclass')
    return res.data;
    // console.log(res.data);
})

console.log(addClasses);  

const myAddClasses = addClasses?.filter(myAddClass => myAddClass.email === user.email)

  const handleAddClassDelete = item => {
    console.log(item._id);
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
            fetch(` https://summer-sports-camp-server.vercel.app/myaddclassdelete/${item._id}`, {
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
  
  const onSubmit = data =>{
    console.log(data);
  }

    return (
        <div className="w-full">
          
          <div className="w-full">
            <Helmet>
                <title>Summer Sports | Enroll Class</title>
            </Helmet>
            <SectionTitle title="All My Create Class"></SectionTitle>
        
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-100 rounded-lg ">
                <h3 className="text-3xl">Total Add: {myAddClasses.length}</h3> 
            </div>
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
                                   
                                   {/* <button className="text-white bg-indigo-700 btn btn-ghost">Update</button>  */}
                                   <button className="btn" onClick={()=>window.my_modal_5.showModal()}>update</button>
                                   
                                     <button onClick={()=>handleAddClassDelete(item)} className="mx-3 text-white bg-red-600 btn btn-ghost">Delete</button>
                                     
                                   
                                </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        
        {/* modal  */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box" >
  <form onSubmit={handleSubmit(onSubmit)} >
                <div className="w-full mb-4 form-control">
                    <label className="label">
                        <span className="font-semibold label-text">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="w-full input input-bordered " />
                </div>
                <div className="flex my-4">
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input type="text" placeholder="Instructor Name" defaultValue={user.displayName}                     
                        {...register("instructor",  { required: true, maxLength: 120 })}
                        className="w-full input input-bordered " />
                    </div>
                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Instructor Email*</span>
                        </label>
                        <input type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Type here" className="w-full input input-bordered " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Available-Seate*</span>
                        </label>
                        <input type="number" placeholder="Class Name"
                        {...register("available_seats", { required: true })}
                        className="w-full input input-bordered " />
                        <input type="text" hidden defaultValue={"Pending"} placeholder="sssss"
                        {...register("status", { required: true })}
                        className="w-full input input-bordered " />
                        <input type="text" hidden defaultValue={0} placeholder="sssss"
                        {...register("enroll", { required: true })}
                        className="w-full input input-bordered " />
                    </div>
                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="w-full input input-bordered " />
                    </div>
                </div>
                
                <div className="w-full my-4 form-control">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="w-full file-input file-input-bordered " />
                </div>
                <input className="flex items-center mx-auto my-4 text-center bg-purple-700 btn btn-sm" type="submit" value="Add Class" />
               
  </form> 
  <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>

        </div>
    );
};

export default MyAddClass;