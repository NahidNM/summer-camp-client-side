import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    
    const handleMakeAdmin = user =>{
   
        fetch(` https://summer-sports-camp-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(` https://summer-sports-camp-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    // ----------User delete handle------------
    const handleDelete = user => {
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
                fetch(` https://summer-sports-camp-server.vercel.app/users/${user._id}`, {
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
        <div className="w-full pl-2 ">
            <Helmet>
                <title>Summer Sports | All users</title>
            </Helmet>
            <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">Total Users: {users.length} </div>
            <div className="divider"></div>
            
            <div className="overflow-x-auto ">
                <table className="table w-full bg-red-300">
                    {/* head */}
                    <thead>
                        <tr className="md:text-xl">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role|| 'User'}</td>
                                <td className="flex items-center gap-2">
                                    { user.role === 'admin' ? <button disabled className="text-white bg-orange-600 btn btn-ghost">Admin</button> :
                                    <button onClick={() => handleMakeAdmin(user)} className="text-white bg-orange-600 btn btn-ghost">Make Admin</button> 
                                    }
                                    { user.role === 'instructor' ?<button disabled className="text-white bg-orange-600 btn btn-ghost"> Instructor</button>  :
                                    <button onClick={() => handleMakeInstructor(user)} className="text-white bg-orange-600 btn btn-ghost">Make Instructor</button> 
                                    }<button onClick={()=>handleDelete(user)} className="text-white bg-red-600 btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                    
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;