import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Error/ErrorPage";
import Class from "../pages/Class/Class";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import Instructor from "../pages/Dashboard/Instructor/Instructor";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnroolClass from "../pages/Dashboard/EnrollClass/EnroolClass";
import PayHistory from "../pages/Dashboard/PayHistory/PayHistory";
import MyAddClass from "../pages/Dashboard/MyAddClass/MyAddClass";
import MangeClass from "../pages/Dashboard/MangeClass/MangeClass";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import InstructorRoute from "./InstructorRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'class',
          element: <Class></Class>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [

        // User Dashboard

        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>,
          loader: (({params})=> fetch(` http://localhost:5000/addClasses/${params.id}`))
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },
        {
          path: 'enrollclass',
          element: <EnroolClass></EnroolClass>
        },
        {
          path: 'payhistory',
          element: <PayHistory></PayHistory>
        },

        // Admin Dashboard 
        {
          path:'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageclass',
          element: <AdminRoute><MangeClass></MangeClass></AdminRoute>
        },
        {
          path: 'adminhome',
          element: <AdminHome><AdminHome></AdminHome></AdminHome>
        },

        // Insturctor Dashboard
        {
          path:'instructorhome',
          element: <InstructorRoute><Instructor/></InstructorRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddItem></AddItem></InstructorRoute>
        },
        {
          path: 'myaddclass',
          element: <InstructorRoute><MyAddClass></MyAddClass></InstructorRoute>
        }
      ]
      
    },
  
  ]);