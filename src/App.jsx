import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootComponent from "./Common/RootComponent";
import Feedback from "./Pages/feedback/feedback";
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
        element: <Feedback />,
       }
        
     ],
     },
   ]);

  return (
    <>
       {<RouterProvider router={router} /> } 
    
    </>
  );
}
