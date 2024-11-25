import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import Prescription from "./Common/Prescription";
import ProtectedRoutes from "./Admin/AdminCommon/ProtectedRoutes";
import AdminLayout from "./Admin/AdminCommon/AdminLayout";
import Login from './Admin/login/login'; 
import Dashboard from "./Admin/pages/Dashboard";
import CreateCategory from "./Admin/pages/categories/CreateCategory";
import AllCategories from "./Admin/pages/categories/AllCategories";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "prescription",
          element: <Prescription />
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          index: true,
          element: <Dashboard />
        },{
          path:"product-category",
          children:[{
            path:"",
            index:true,
            element:<AllCategories />
          },
          {
            path:"create",
            element:<CreateCategory />
          }
        ]
        }
      ]
    },
    {
 
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
