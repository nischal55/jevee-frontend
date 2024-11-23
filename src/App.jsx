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
      element: <RootComponent />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "products/:category", // Dynamic route for categories
          element: <ProductPageMain />, // ProductPageMain will handle category rendering
        },
        {
          path : "products/:category/:subcategory",
          element : <ProductPageMain/>,
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
