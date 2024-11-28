import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsEyeSlash } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuEye } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Slice/authSlice";

function LoginModal({ closeLogin, setShowSignUp, setForgetPassword }) {
  const {isLoading} = useSelector((state) => state.auth);
  const [focusState, setFocusState] = useState({
    phone: false,
    password: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userdata, setUserdata] = useState({
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {identifier:userdata.phone,password:userdata.password};
    if (!userdata.phone || !userdata.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    dispatch(login(data)).then((result) => {
  
      if(result.payload?.token){
        
          toast.success("Login successfully!")
      closeLogin();
    }else{
      toast.error("Login failed!")
      setEmail("");
      setPassword("");  
    }
  })

   
  }

  const handleFocus = (field) => {
    setFocusState((prevState) => ({ ...prevState, [field]: true }));
  };
  
  const handleBlur = (field) => {
    setFocusState((prevState) => ({ ...prevState, [field]: false }));
  };

  return (
    <div className="fixed w-[330px] md:w-[720px] lg:w-[900px] h-[90vh] md:h-[500px] bg-white top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:p-8 overflow-y-auto rounded-md mx-auto no-scrollbar">
      <button
        className="absolute top-2 right-2 text-xl bg-[#F2F2F2] h-8 w-8 rounded-full flex items-center justify-center"
        onClick={closeLogin}
      >
        <RxCross2 />
      </button>
      <div className="py-5 flex flex-col md:flex-row items-center justify-between pt-10 md:pt-0 my-5">
        <div className="flex flex-col md:p-5 lg:ml-10 gap-20 h-full justify-between mb-5 md:mb-0">
          <div className="h-[33px] w-[160px]">
            <img
              src="https://www.jeevee.com/_next/static/media/logo.b826b85b.svg"
              alt=""
            />
          </div>
          <div className="md:w-[350px] md:h-[252px]">
            <img
              src="https://www.jeevee.com/_next/static/media/customer-signin.aa672bf1.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 md:mt-0">
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-col gap-5"
          >
            <div
              className={`px-4 w-[300px] rounded-full border ${focusState.phone ? "border-pink-300" : ""}`}>
              <input
                name="phone"
                onFocus={() => handleFocus("phone")}
                onBlur={() => handleBlur("phone")}
                onChange={handleChange}
                type="text"
                className="outline-none py-2 w-full"
                placeholder="Mobile Number *"
              />
            </div>
            <div className={`w-[300px] flex justify-center items-center rounded-full border px-4 ${focusState.password ? "border-pink-300" : ""}`}>
              <input
                name="password"
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                onChange={handleChange}
                type={`${showPassword ? "text" : "password"}`}
                className="outline-none py-2 w-full"
                placeholder="Password *"
              />
              <BsEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className={`cursor-pointer ${
                  showPassword === true ? "hidden" : "flex"
                }`}
              />
              <LuEye
                onClick={() => setShowPassword(!showPassword)}
                className={`${showPassword ? "flex" : "hidden"} cursor-pointer`}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#F2F2F2] px-5 py-2 items-center w-[40%] text-gray-400 mt-5 rounded-sm"
            >
              {isLoading?"Signing In":"Sign In"}
              {/* Sign In */}
            </button>
          </form>
          <button
            className="text-gray-400 text-lg my-3"
            onClick={() => setForgetPassword(true)}
          >
            Forgot Password
          </button>
          <h2 className="text-gray-400 text-lg">
            Don't have an Account?{" "}
            <button
              className="text-pink-300"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </button>
          </h2>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginModal;
