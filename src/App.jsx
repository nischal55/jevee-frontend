import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootComponent from "./Common/RootComponent";
import FeedBack from "./Pages/feed/FeedBack";
import Home from "./Pages/Home";
import SellOnJevee from "./Pages/SellOnJevee";
import AllCategories from "./Admin/pages/categories/AllCategories";
import CreateCategory from "./Admin/pages/categories/CreateCategory";
import Dashboard from "./Admin/pages/Dashboard";
import AdminLayout from "./Admin/AdminCommon/AdminLayout";
import Login from "./Admin/login/login";
import Profile from "./Admin/pages/profile/profile";
import ProductPageMain from "./components/ProductBox/ProductPageMain";
import Prescription from "./Common/Prescription";
import CreateProduct from "./Admin/pages/product/CreateProduct";
import CreateChildCategory from "./Admin/pages/categories/CreateChildCategory";
import AllChildCategories from "./Admin/pages/categories/AllChildCategories";
import CreateSubCategory from "./Admin/pages/categories/CreateSubCategory";
import AllSubCategories from "./Admin/pages/categories/AllSubCategories";
import Cart from "./Pages/cart/Cart";
import About from "./components/AboutUs"
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./Redux/Slice/authSlice";
import { useEffect } from "react";
import CreateMainBanner from "./Admin/pages/banner/CreateMainBanner";
import AllMainBanner from "./Admin/pages/banner/AllMainBanner";
// import InsideProductPage from "./components/ProductBox/InsideProductPage";
import Product from "./Pages/product/Product";
export default function App() {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    
  }, [dispatch]);

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
          path: "/vendor-enrollment",
          element: <SellOnJevee />,
        },
        {
          path: "/feedback",
          element: <FeedBack />,
        },
        {
          path: "/category/:category",
          element: <ProductPageMain />
        },
        {
          path:"product-description/",
          element:<Product />
        },
        {
          path: "/category/:category/:subCategory",
          element: <ProductPageMain />
        },
        {
          path: "/category/:category/:subCategory/:childCategory",
          element: <ProductPageMain />
        },
        {
          path: "prescriptions",
          element: <Prescription />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "about",
          element: <About />
        },
       
      ],

    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          index: true,
          element: <Dashboard />
        },
        {
          path: "product-category",
          children: [{
            path: "",
            index: true,
            element: <AllCategories />
          },
          {
            path: "create",
            element: <CreateCategory />
          },
          ]
        },
        {
          path: "profile",
          element: <Profile />,
        },
        , {
          path: "product-sub-category",
          children: [
            {
              path: "",
              index: true,
              element: <AllSubCategories />
            }, {
              path: "create",
              element: <CreateSubCategory />
            }
          ]

        },
        , {
          path: "product-child-category",
          children: [
            {
              path: "",
              index: true,
              element: <AllChildCategories />
            }, {
              path: "create",
              element: <CreateChildCategory />
            }
          ]

        },
        {
          path: "product",
          children: [{
            path: "",
            index: true,
            element: <div>products</div>
          },
          {
            path: "create",
            element: <CreateProduct />
          }
          ]
        },
        {
          path:"banner",
          children:[
            {
              path: "main-banner",
              children:[{
                path:"",
                index:true,
                element:<AllMainBanner/>
              },
                {
                  path: "create",
                  index: true,
                  element: <CreateMainBanner />
                }
              ]
            }
              
          ]
        }


      ]
    },
    {

      path: "/login",
      element: <Login />
    }
  ]);
  return <>
    <Toaster position="top-right" />
    {<RouterProvider router={router} />}</>;
}

