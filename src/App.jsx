import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import Prescription from "./Common/Prescription";
import ProtectedRoutes from "./Admin/AdminCommon/ProtectedRoutes";
import AdminLayout from "./Admin/AdminCommon/AdminLayout";

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
      element : <ProtectedRoutes/>,
      children :[
        {
          path:"",
          element:<AdminLayout/>
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
