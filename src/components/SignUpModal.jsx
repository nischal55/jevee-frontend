import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsEyeSlash } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

function SignUpModal({ closeSignUp, setShowLogin }) {
  const [focusState, setFocusState] = useState({
    phone: false,
    dob: false,
    password: false,
    confirmPassword: false,
    referralCode: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userdata, setUserdata] = useState({
    phone: "",
    password: "",
    dob: "",
    referralCode: "",
    termsPolicies: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUserdata({ ...userdata, [name]: checked });
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setUserdata({ ...userdata, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userdata.phone || !userdata.password || userdata.dob) {
      toast.error("Please fill in required fields.");
      return;
    }
    if (!userdata.termsPolicies) {
      toast.error("You must agree to the Terms and Conditions!");
      return;
    }

    if (userdata.password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);

    axios
      .post(`http://jeeve.vercel.app/signup`, userdata)
      .then((res) => {
        toast("User created successfully");
      })
      .catch((err) => {
        toast.error("Failed to create user! Please check your credentials.");
        console.log("Error", err);
        setIsSubmitting(false);
      });
  }

  const handleFocus = (field) => {
    setFocusState((prevState) => ({ ...prevState, [field]: true }));
  };
  
  const handleBlur = (field) => {
    setFocusState((prevState) => ({ ...prevState, [field]: false }));
  };

  return (
    <div className="fixed w-[330px] md:w-[720px] lg:w-[900px] h-[90vh] md:h-[500px] bg-white top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 overflow-y-auto rounded-md no-scrollbar">
      <button
        className="absolute top-2 right-2 text-xl bg-[#F2F2F2] h-8 w-8 rounded-full flex items-center justify-center"
        onClick={closeSignUp}
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
<form className="flex items-center flex-col gap-3">
          <div className={`px-4 w-[300px] rounded-full border ${focusState.phone? "border-pink-300":""}`}>
            <input
              name="phone"
              onFocus={()=>handleFocus("phone")}
              onBlur={()=>handleBlur("phone")}
              onChange={handleChange}
              type="text"
              className="outline-none py-2 w-full"
              placeholder="Mobile Number *"
            />
          </div>
          <div className={`px-4 w-[300px] rounded-full border flex items-center justify-between gap-2 ${focusState.dob?"border-pink-300":""}`}>
            <label htmlFor="dob" className={`w-48 text-gray-400`}>
              Date Of Birth *:
            </label>
            <input
              id="dob"
              name="dob"
              onFocus={()=>handleFocus("dob")}
              onBlur={()=>handleBlur("dob")}
              onChange={handleChange}
              type="date"
              className="outline-none py-2 w-full"
            />
          </div>
          <div className={`w-[300px] flex justify-center items-center rounded-full border px-4 ${focusState.password?"border-pink-300":""}`}>
            <input
              name="password"
              onFocus={()=>handleFocus("password")}
              onBlur={()=>handleBlur("password")}
              onChange={handleChange}
              type={`${showPassword ? "text" : "password"}`}
              className="outline-none py-2 w-full"
              placeholder="Password *"
            />
            <BsEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className={`cursor-pointer ${showPassword ? "hidden" : "flex"}`}
            />
            <LuEye
              onClick={() => setShowPassword(!showPassword)}
              className={`${showPassword ? "flex" : "hidden"} cursor-pointer`}
            />
          </div>

          <div className={`w-[300px] flex justify-center items-center rounded-full border px-4 ${focusState.confirmPassword?"border-pink-300":""}`}>
            <input
              name="confirmPassword"
              onFocus={()=>handleFocus("confirmPassword")}
              onBlur={()=>handleBlur("confirmPassword")}
              onChange={handleChange}
              type={`${showConfirmPassword ? "text" : "password"}`}
              className="outline-none py-2 w-full"
              placeholder="Confirm Password *"
            />
            <BsEyeSlash
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={`cursor-pointer ${
                showConfirmPassword ? "hidden" : "flex"
              }`}
            />
            <LuEye
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={`${
                showConfirmPassword ? "flex" : "hidden"
              } cursor-pointer`}
            />
          </div>
          <div className={`px-4 w-[300px] rounded-full border ${focusState.referralCode? "border-pink-300":""}`}>
            <input
              name="referralCode"
              onFocus={()=>handleFocus("referralCode")}
              onBlur={()=>handleBlur("referralCode")}
              onChange={handleChange}
              type="text"
              className="outline-none py-2 w-full"
              placeholder="Referral Code"
            />
          </div>
          <div className="w-[300px] px-5 text-gray-400">
            <input
              type="checkbox"
              name="termsPolicies"
              className="mr-2"
              checked={userdata.termsPolicies || false}
              onChange={handleChange}
            />
            I agree to Jeevee's{" "}
            <Link className="text-pink-300">Terms and Conditions</Link> and{" "}
            <Link className="text-pink-300">Privacy Policy</Link>
          </div>
          <button
            type="submit"
            className="bg-[#F2F2F2] px-5 py-2 items-center w-[40%] text-gray-400 mt-5 rounded-sm"
            disabled={isSubmitting}
          >
            Join Jeevee
          </button>
        </form>
        <h2 className="text-gray-400 text-lg my-3">
            Already have an account?
            <button className="text-pink-300 ml-1" onClick={()=>setShowLogin(true)}> Sign In</button>
          </h2>
</div>
        
      </div>
      
      <ToastContainer />
    </div>
  );
}

export default SignUpModal;
