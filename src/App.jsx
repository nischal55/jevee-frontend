import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import Prescription from "./Common/Prescription";

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
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
