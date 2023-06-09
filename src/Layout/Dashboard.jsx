import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaCartPlus } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import { MdClass } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    
    // const isAdmin = false;
    const isAdmin = useAdmin();
    
    
    return (
        <>
            <Helmet>
        <title>Sumner Sports camp | Classes</title>
      </Helmet>
      <div className="drawer lg:drawer-open drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="flex flex-col items-center justify-center drawer-content">
    {/* Page content here */}
    
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="p-4 menu w-80">
      {/* Sidebar content here */}
      {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"> <FaUtensils></FaUtensils> Add to Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                           </> :
                           <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My Class
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                        </>
                    }
                    
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/class"><MdClass></MdClass> Classes</NavLink></li>
                    <li><NavLink to="/order/salad"> <FaCartPlus></FaCartPlus>Enroll Class</NavLink></li>

    </ul>
  
  </div>
</div>
        </>
    );
};

export default Dashboard;