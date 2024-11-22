import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import ProductPageMain from "./components/ProductPageMain";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent/>,
      children:[
        {
          path:"home",
          element:<Home/>
        },
        {
        path:"products",
        element:<ProductPageMain/>
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
