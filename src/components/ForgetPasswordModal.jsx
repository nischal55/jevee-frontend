import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPasswordModal({closeforgetPassword, goBack}) {
    const [isFocused, setIsFocused] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [phone, setPhone] = useState("")
  
    function handleSubmit(e){
       e.preventDefault()
       setIsSubmitting(true)
       axios.post(`http://jeeve.vercel.app/login`,phone).then((res)=>{
        toast("Password reset successfully")
       }).catch((err)=>{
        toast.error("Please check your credentials.");
        console.log("Error",err)
        setIsSubmitting(false)
       })
    }

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    return (
    <div className='fixed w-[330px] md:w-[720px] lg:w-[900px] h-[90vh] md:h-[500px] bg-white top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:p-8 overflow-y-auto rounded-md mx-auto no-scrollbar'>
      <button 
          className="absolute top-2 right-2 text-xl bg-[#F2F2F2] h-8 w-8 rounded-full flex items-center justify-center" 
        onClick={closeforgetPassword}><RxCross2 /></button>
        <div className="py-5 flex flex-col md:flex-row items-center justify-between pt-10 md:pt-0 my-5">
         <div className='flex flex-col md:p-5 lg:ml-10 gap-20 h-full justify-between mb-5 md:mb-0'>
           <div className='h-[33px] w-[160px]'>
            <img src="https://www.jeevee.com/_next/static/media/logo.b826b85b.svg" alt="" />
           </div>
           <div className='md:w-[350px] md:h-[252px]'>
            <img src="https://www.jeevee.com/_next/static/media/customer-forgot-password.45b3f905.svg" alt="" />
           </div>
         </div>
  
          <div className='flex flex-col items-center mt-5 md:mt-0'>
          <form onSubmit={handleSubmit} className='flex items-center flex-col gap-5'>
            <h2 className='text-gray-400'>Forget Password</h2>
           <div className={`w-[300px] flex justify-center items-center rounded-full border px-4 ${isFocused ? "border-pink-300": ""}`}>
           <input name='phone' onChange={()=>setPhone(e.target.value)} type='text' className='outline-none py-2 w-full'  placeholder='Enter your mobile number *' onFocus={handleFocus} onBlur={handleBlur}/>
           </div>      
         <button type='submit' disabled={isSubmitting} className='bg-[#F2F2F2] px-5 py-2 items-center w-[50%] text-gray-400 mt-5 rounded-sm'>
            Reset Password
           </button>
           </form>
          <button onClick={goBack} className='text-gray-400 text-lg my-3' >Go Back</button>
          </div>
        </div>
        <ToastContainer />
    </div>
    )
}

export default ForgetPasswordModal
