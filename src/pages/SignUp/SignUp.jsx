import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import GoggleLogin from "../Shared/SocialLogin/GoggleLogin";
import { useState } from "react";


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors },  watch, } = useForm();
  const { createUser, updateUserProfile, setReload } = useAuth()
  const navigate = useNavigate();
  
  const [error, setError] = useState("");

//   const from = location.state?.from?.pathname || "/login";
  
  const onSubmit =( data ) => {

    createUser(data.email, data.password)
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser);
            
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('user profile update');
                
                const saveUser = {name: data.name, email: data.email}
                
                fetch(' http://localhost:5000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json' 
                    },
                    body: JSON.stringify(saveUser)
                    
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        setReload(Date.now());
                        reset()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully registered',
                            showConfirmButton: false,
                            timer: 1000
                          })
                          navigate('/');
                    }
                })
                
              
                // navigate(from, { replace: true });
              });
        })
        .catch((Error) => {
            console.log(Error);
           setError(Error.message)
          });
};
  
    return (
      
           
      
        <div className="min-h-screen py-20 hero">
        <Helmet>
        <title>Sumner Sports camp | SignUp</title>
      </Helmet>
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="flex-shrink-0 w-full s hadow-2xl card bg-slate-500">
                    <h1 className="mt-10 text-3xl font-semibold text-center">Please Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                               
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Confirm Password</span>
                                </label>
                                <input
              type="password"
              id="confirm_pass"
              placeholder="Enter your confirm password"
              className="w-full max-w-xs input input-bordered "
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Passwords do not match" ,
              })}
            />
                                {errors.confirmPassword && (
              <span className="text-red-600">{errors.confirmPassword.message}</span>
            )}
            
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>
                            {error && <span>{error}</span> }
                             </p>
                            
                            <div className="mt-6 form-control">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                       
                        <p className="pl-5 text-xl"><small>Already have an account <Link to="/login" className="font-semibold text-blue-700 ">Login</Link></small></p>
                        
                      {/* Social Login */}
                      <GoggleLogin></GoggleLogin>
                      
                    </div>
                </div>
            </div>  
      
    );
};

export default SignUp;