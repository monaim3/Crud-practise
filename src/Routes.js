import { createBrowserRouter } from "react-router-dom";
import AllCard from "./AllCard";

import DashboardLayout from "./DashboardLayout";
import Home from "./Home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
      
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
            path:'/dashboard/alluser',
            element:<AllCard></AllCard>
        }
    ]

    }
])