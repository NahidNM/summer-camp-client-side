import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../component/SectionTitle";


const AddItem = () => {
    
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    
    
    return (
        <div className="w-full px-10 bg-orange-300">
            <SectionTitle title='Add a Class' ></SectionTitle>
            <form >
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
                        <input type="text" placeholder="Class Name"
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="w-full input input-bordered " />
                    </div>
                    <div className="w-full ml-4 form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Instructor Email*</span>
                        </label>
                        <input type="email" {...register("price", { required: true })} placeholder="Type here" className="w-full input input-bordered " />
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