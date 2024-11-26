import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import ProductPageMain from "./components/ProductBox/ProductPageMain";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "category/:category", 
          element: <ProductPageMain />, 
        },
        {
        path: "category/:category/:subCategory",
        element: <ProductPageMain />,
        }
         
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
