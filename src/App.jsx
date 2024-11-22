import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import AdminLayout from "./Admin/AdminCommon/AdminLayout";
import Dashboard from "./Admin/pages/Dashboard";




export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "",
          element: <Home />
        }
      ]
      ,
    },
    {
      path: "/admin/",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
