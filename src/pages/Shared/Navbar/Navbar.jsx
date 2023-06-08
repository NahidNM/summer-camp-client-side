import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user); 
  
  // Log Out handle
  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error)
    })
  }
  
  const navOption =  <>
  <li>
  <NavLink to='/' className={({isActive})=>(isActive? 'font-medium tracking-wide text-amber-200 transition-colors duration-200 border md:px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700': 'hover:text-green-500 font-medium')}>Home</NavLink>
</li>
<li>
<NavLink to='/' className={({isActive})=>(isActive? 'font-medium tracking-wide text-amber-200 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700': 'hover:text-green-500 font-medium')}>Inistuctores</NavLink>
</li>
<li>
<NavLink to='/class' className={({isActive})=>(isActive? 'font-medium tracking-wide text-amber-200 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700': 'hover:text-green-500 font-medium')}>Classes</NavLink>
</li>
<li>
{
  user ? <>  <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></>: 
  <>  <Link to='/login'>Login</Link></>
}
</li>
</>

  return (
    <>
      <div className="fixed z-10 max-w-screen-xl text-white bg-black opacity-50 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 text-white bg-black shadow menu menu-sm dropdown-content rounded-box w-52"
            >
             {navOption}
            </ul>
          </div>
          <a className="text-xl normal-case btn btn-ghost">sports school</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
           {navOption}
          </ul>
        </div>
        
       
        <div className="navbar-end">
        <div className='flex items-center gap-2 md:gap-4 md:mx-10 md:text-xl'>
            { 
             user ?<>
            <div className='flex items-center gap-2 '>
              
            <div className='ml-5 tooltip avatar ' data-tip= {user?.displayName} >
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         <img src={user?.photoURL}  className=''/>
             </div>
             </div>
            </div>
             </>  : 
             <div className='ml-5 '>
             <FaRegUserCircle size={46}></FaRegUserCircle>
             </div>
             }
            </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
