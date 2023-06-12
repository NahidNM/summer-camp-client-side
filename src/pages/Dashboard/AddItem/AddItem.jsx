import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../component/SectionTitle";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    
    const {user} = useAuth()
    
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    
   
    // console.log(img_hosting_token);
    
    const onSubmit = data => {
        console.log(data);
       
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, instructor, available_seats, email, status, enroll} = data;
                
                const newClass = {name: name, 
                    price: parseFloat(price),
                     instructor: instructor,
                      available_seats: parseFloat(available_seats),
                       email: email,
                        image:imgURL,
                        status: status,
                        enroll: parseFloat(enroll)
                        
                    }
                console.log('new',newClass);
                  
                //post   
                axiosSecure.post('/classes', newClass)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    
    return (
        <div className="w-full px-10 bg-orange-300">
            <SectionTitle title='Add a Class' ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
    );
};

export default AddItem;