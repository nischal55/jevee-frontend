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
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <AdminLayout />
        }
      ]
    },
    {
      // Add a new route for the Login component
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
