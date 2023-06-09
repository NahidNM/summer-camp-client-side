import { Link, useLocation, useNavigate } from "react-router-dom";
import gif from '../../../public/Login/World Bicycle Day.gif'
import { FaGoogle } from 'react-icons/fa'; 
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import GoggleLogin from "../Shared/SocialLogin/GoggleLogin";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    
    
    return (
        <div>
            <Helmet>
        <title>Sumner Sports camp | Login</title>
      </Helmet>
            <div className='grid w-full pt-20 mb-10 md:grid-cols-2'>
            <div data-aos="fade-right" className='m-5'>
                <img className='' src={gif} alt="" />
            </div>
            
         <div data-aos="fade-left" className='h-full px-10 pt-5 mx-auto border-2 border-indigo-600 border-solid rounded-lg bg-slate-400'>
         <h1 className='mb-5 text-4xl font-semibold text-center'>Please Login</h1>
            <form onSubmit={handleLogin}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className=" input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl font-semibold label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="text-sm label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            
                        
                            <div className="mt-6 form-control">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
            <div>
                <h1 className='text-xl'>Don't Have an Account ?<Link to='/signup' state={location.state}> <span className='text-blue-700'>SignUp</span></Link></h1>
            
                </div>
                <div>
                    <h1 className='mb-4 text-2xl font-semibold text-center mt-7'>Login With</h1>
                    <GoggleLogin></GoggleLogin>
                    
         </div>
            </div>
       
        </div>
        </div>
    );
};

export default Login;