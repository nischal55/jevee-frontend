import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent/>,
      children:[
        {
          path:"",
          element:<Home/>
        }
      ]
      ,
    },
  ]);
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
