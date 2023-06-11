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
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },

        // Admin Dashboard 
        {
          path:'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },

        // Insturctor Dashboard
        {
          path:'instructorhome',
          element: <Instructor/>
        },
        {
          path: 'addClass',
          element: <AddItem></AddItem>
        }
      ]
      
    },
  
  ]);