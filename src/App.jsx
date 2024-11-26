import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponent from "./Common/RootComponent";
import FeedBack from "./Pages/feed/FeedBack";
import Home from "./Pages/Home";
import SellOnJevee from "./Pages/SellOnJevee";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/sellonjevee",
          element: <SellOnJevee />,
        },
        {
          path: "/feedback",
          element: <FeedBack />,
        },
      ],
    },
  ]);

  return <>{<RouterProvider router={router} />}</>;
}
