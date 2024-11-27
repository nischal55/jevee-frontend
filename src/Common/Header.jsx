import React, { useEffect, useRef, useState } from 'react'
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { PiBellRingingLight } from "react-icons/pi";
import { IoCameraOutline, IoMenuSharp, IoFlame } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { MdOutlineNoteAlt } from "react-icons/md";
import { GiNotebook, GiReceiveMoney } from "react-icons/gi";
import { PiWechatLogoLight, PiHandCoinsDuotone } from "react-icons/pi";
import { SlLogin } from "react-icons/sl";
import Categories from '../components/Categories';
import { FaChevronLeft, FaAngleRight, FaPeopleRoof } from "react-icons/fa6";
import LoginModal from '../components/LoginModal';
import DropDownMenu from '../components/DropDownMenu';
import SignUpModal from '../components/SignUpModal';
import ForgetPasswordModal from '../components/ForgetPasswordModal';
import { BsBagPlus } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { RiMedicineBottleLine } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { TbVaccine } from "react-icons/tb";
import { CiHeart, CiUser, CiLocationOn, CiUnlock } from "react-icons/ci";

function Header() {
  const [dropMenu, setDropMenu] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [forgetPassword, setForgetPassword] = useState(false)
  const [showflag, setShowflag] = useState(false)
  const [active, setActive] = useState("")
  const alphabets = ["ALL", "#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 7;
  const totalItems = alphabets.length;
  const visibleAlphabets = alphabets.slice(currentIndex, currentIndex + itemsPerPage)

const [isLoggedIn, setIsLoggedIn] = useState(true)
const user = {}

  useEffect(() => {
    if (dropMenu || showLogin || showSignUp || forgetPassword) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [dropMenu, showLogin, showSignUp]);

  function prevPage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  const nextPage = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const disablePrev = currentIndex <= 0;
  const disableNext = currentIndex >= totalItems - itemsPerPage;

  function closeLogin() {
    setShowLogin(false)
  }

  function closeSignUp() {
    setShowSignUp(false)
  }

  function closeMenu() {
    setDropMenu(false)
  }

  function goBack() {
    setForgetPassword(false)
  }

  function closeforgetPassword() {
    setForgetPassword(false)
    setShowLogin(false)
  }

  return (
    <div className='mx-auto'>
      <div className={`max-w-full ${dropMenu || showLogin || showSignUp || forgetPassword === true ? "overflow-hidden" : ""} `} >
        {/* top-navbar */}
        <div className='container h-[50px] md:h-[72px] grid grid-cols-5 md:grid-cols-4 lg:grid-cols-12 justify-between'>
          <div className='relative flex my-auto col-span-2 gap-2 md:col-span-1 lg:col-span-2'>
            <div>
              <div onClick={() => { setDropMenu(true) }}>
                <IoMenuSharp className='flex text-2xl lg:hidden' />
              </div>
              {dropMenu && <div className="fixed top-0 left-0 shadow-lg z-50 w-[80%]">
                <DropDownMenu closeMenu={closeMenu} />
              </div>}
            </div>


            <Link to="/" className='min-h-[15px] mt-1 min-w-[72px] md:h-[21px] md:w-[102px]'>
              <img src="https://www.jeevee.com/_next/static/media/logo.b826b85b.svg" alt="jevee logo" />
            </Link>
          </div>
          <ul className='flex items-center justify-between col-span-3 md:col-span-3 lg:col-span-10'>
            <li className='hidden lg:flex'><h2 className='font-bold'>CATEGORIES</h2></li>
            <li className='cursor-pointer relative group hidden lg:flex flex-col'><h2 className='font-bold'>BRANDS</h2>

              <ul className='transform -translate-x-1/2 -translate-y-1/2 top-[150px] left-1/2 w-[420px] absolute hidden group-hover:flex flex-col justify-center pt-10 z-30 px-4 bg-white'>
                <div className='flex items-center border p-2 rounded-full'>
                  <GoSearch className='text-black text-xl' />
                  <input type="search" className='outline-none bg-transparent px-2 w-full' placeholder='Search brands' />
                </div>

                <div className='relative'>
                  <div className='mx-4 mt-4 flex items-center gap-2 w-full'>
                    {
                      visibleAlphabets.map(alphabet =>
                        <div key={alphabet} onClick={() => setActive(alphabet)} className={`py-1 mx-2 ${active === alphabet ? "text-pink-500" : ""} px-2 hover:border-b-2  hover:border-b-pink-500`}>{alphabet}</div>
                      )
                    }
                  </div>
                  <div className="mx-2 absolute inset-y-0 top-3 left-[-20px] flex items-center justify-center w-10">
                    <button
                      onClick={prevPage}
                      disabled={disablePrev}
                      className={`rounded-full  border p-2 shadow-xl ${disablePrev ? 'bg-white cursor-default' : ''}`}
                    >
                      <FaChevronLeft />
                    </button>
                  </div>
                  <div className="mx-2 absolute inset-y-0 top-3 right-[-20px] flex items-center justify-center w-10 ">
                    <button
                      onClick={nextPage}
                      disabled={disableNext}
                      className={`rounded-full border p-2 shadow-xl ${disableNext ? 'bg-white cursor-default' : ''}`}
                    >
                      <FaAngleRight />
                    </button>
                  </div>
                </div>

                <div className='bg-[#FEF2F2] flex flex-col items-center py-4 my-5'>
                  <h2 className='text-xl text-[#F25CA8]'>could not connect to inventory</h2>
                  <p>Retry</p>
                </div>
              </ul>

            </li>
            <li className='hidden md:flex justify-between items-center gap-2 bg-[#F8F8F8] rounded-full py-1 pl-2 pr-10'>
              <GoSearch className='text-blue-400 text-xl' />
              <div>
                <input type="search" className='outline-none text-sm bg-transparent px-2' placeholder='Search for medicine...' />
              </div>
            </li>
            <li className=''>
              <Link to="/prescription" className='hidden lg:flex bg-[#F25CA8] items-center px-4 rounded-md gap-2 py-[1px] text-white'>

                <IoCameraOutline className='text-4xl' /> <p className='text-[12px]'>Upload <br /><span className='font-semibold text-sm'>Prescriptions</span></p>
              </Link>
            </li>

            <li className='relative group cursor-pointer flex justify-between items-center gap-[1px]'><FaRegUser className='md:text-2xl mt-2' />
              <div className='hidden xl:flex flex-col'><p className='text-[12px]'>Hello {` `}
              {
                isLoggedIn ? user?.name : "user"
              }   
                </p>
                <h2 className='flex items-center gap-2 text-sm font-semibold'>My Account </h2>

             { isLoggedIn ?
              <ul className='absolute border-x h-[100vh] border-b bg-[#F8F8F8] hidden group-hover:flex flex-col top-[39.4px] -right-20 z-30 pb-2 rounded-md overflow-y-auto scrollbar-thin'>
                <li className='px-3 py-2 flex justify-center items-center border-b hover:bg-[#F4F5F7]'>
                  <div className='flex items-center gap-4 bg-gradient-to-r from-[#51CDE7] via-[#7895FC] to-[#C167FC] px-3 py-2 text-white rounded-full w-[250px]'>
                    <IoFlame className='text-xl' /> <h2>Jeevee Offers</h2>
                  </div>
                </li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><BsBagPlus className='text-xl' /><h2>Orders</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><FiThumbsUp className='text-xl' /><h2>Reviews</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><GiReceiveMoney className='text-xl' /><h2>Refer and Earn</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><RiMedicineBottleLine className='text-xl' /><h2>Prescriptions</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><GrAnnounce className='text-xl' /><h2>Campaign Booking</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]' to={"/feedback"}>
                  <TbVaccine className='text-xl' />
                <h2>Vaccination History</h2>
                </li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><CiHeart className='text-xl' /><h2>Wishlist</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><CiUser className='text-xl' /><h2>Personal Information</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><FaPeopleRoof className='text-xl' /><h2>Family Members</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><CiLocationOn className='text-xl' /><h2>My Addresses</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><CiUnlock className='text-xl' /><h2>Change Password</h2></li>
                <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><LiaPhoneVolumeSolid className='text-xl' /><h2>Contact Us</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><HiOutlineInformationCircle className='text-xl' /><h2>About Us</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><MdOutlineNoteAlt className='text-xl' /><h2>Terms & Conditions</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><GiNotebook className='text-xl' /><h2>Policies</h2></li>
                  <li className=''>
                  <Link className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]' to={"/feedback"}>
                    <PiWechatLogoLight className='text-xl' />
                  <h2>Feedback</h2>
                  </Link>
                  </li>
                    <Link to="/vendor-enrollment" className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                    <PiHandCoinsDuotone className='text-xl' /><h2>Sell on Jeevee</h2>
                    </Link>
                <li className='flex py-2 px-6 gap-4 items-center text-[#F25CA8]' onClick={()=>setIsLoggedIn(false)}><SlLogin className='text-xl' /><h2>Logout</h2></li>
              </ul>

             :  <ul className='absolute border-x border-b bg-[#F8F8F8] hidden group-hover:flex flex-col top-[39.4px] -right-20 z-30 pb-2 rounded-md'>
                  <li className='px-3 py-2 flex justify-center items-center border-b hover:bg-[#F4F5F7]'>
                    <div className='flex items-center gap-4 bg-gradient-to-r from-[#51CDE7] via-[#7895FC] to-[#C167FC] px-3 py-2 text-white rounded-full w-[250px]'>
                      <IoFlame className='text-xl' /> <h2>Jeevee Offers</h2>
                    </div>
                  </li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]' onClick={() => setShowSignUp(true)}><FaRegUser className='text-xl' /><h2>Join Jeevee</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><LiaPhoneVolumeSolid className='text-xl' /><h2>Contact Us</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><HiOutlineInformationCircle className='text-xl' /><h2>About Us</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><MdOutlineNoteAlt className='text-xl' /><h2>Terms & Conditions</h2></li>
                  <li className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]'><GiNotebook className='text-xl' /><h2>Policies</h2></li>
                  <li className=''>
                  <Link className='flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]' to={"/feedback"}>
                    <PiWechatLogoLight className='text-xl' />
                  <h2>Feedback</h2>
                  </Link>
                  </li>
                  <li className=''>
                    <Link to="/vendor-enrollment" className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                    <PiHandCoinsDuotone className='text-xl' /><h2>Sell on Jeevee</h2>
                    </Link>
                    </li>
                  <li className='flex py-2 px-6 gap-4 items-center' onClick={() => setShowLogin(true)}><SlLogin className='text-xl' /><h2>Login</h2></li>
                </ul> 
         
}
              </div>
              <IoIosArrowDown className='mt-2 md:mt-5' />
            </li>
            <li className='cursor-pointer'>
            {
  isLoggedIn ? <Link><BsCart2 className='text-2xl cursor-pointer' /></Link> : 
 <BsCart2 onClick={() => setShowLogin(true)} className='text-2xl' />
}
            </li>
           
            <li className='cursor-pointer'>
              {
                isLoggedIn ?  <Link className="text-2xl">
                <PiBellRingingLight />
              </Link> : <PiBellRingingLight className='text-2xl' onClick={() => setShowLogin(true)} />
              }</li>
            <li className='cursor-pointer flex items-center gap-2 relative' onClick={() => setShowflag(!showflag)}>
              <div className='h-[15px] w-[24px]'>
                <img src="https://www.jeevee.com/_next/static/media/us_flag.937a74e4.png" alt="" className='w-full h-full' />
              </div>
              <IoIosArrowDown />
              {
                showflag && <div className='absolute bg-white right-0 top-9 flex flex-col items-center justify-center py-1 border z-30 rounded-sm'>
                  <div className='cursor-pointer flex gap-3 px-5 py-2 hover:bg-[#F4F5F7]'>
                    <div className='h-[20px] w-[30px] bg-cover'>
                      <img src="https://www.jeevee.com/_next/static/media/us_flag.937a74e4.png" alt="" className='w-full h-full' />
                    </div>
                    <h2 className='text-sm'>English</h2>
                  </div>
                  <div className='cursor-pointer flex gap-3 px-5 py-2 w-full hover:bg-[#F4F5F7]'>
                    <div className='h-[20px] w-[30px] bg-cover'>
                      <img src="https://www.jeevee.com/_next/static/media/np_flag.e79b7bb9.png" alt="" className='w-full h-full' />
                    </div>
                    <h2 className='text-sm'>नेपाली</h2>
                  </div>
                </div>
              }
            </li>
          </ul>
        </div>
<hr className='bg-slate-200 h-[1px]'/>

        <div className='container flex md:hidden gap-1 pt-1 pb-2 items-center'>
          <GoSearch className='text-blue-400 text-3xl ml-4' />
          <input type="search" className='w-full outline-none text-sm bg-transparent px-2' placeholder='Search for products, medicine...' />
        </div>

        {/* bottom navbar */}

         <Categories /> 

        <hr />
      </div>


      {/* Full-page overlay when dropMenu is true */}
      {dropMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            closeMenu()
          }}
        />
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            closeLogin()
          }}
        />
      )}

      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            closeSignUp()
          }}
        />
      )}

      {forgetPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            closeforgetPassword()
          }}
        />
      )}

      {/* Login Modal */}
      <div className='absolute mr-4 translate-x-1/2 left-1/2 right-1/2 inset-0 z-40'>
        {
          showLogin && <LoginModal closeLogin={closeLogin} setShowSignUp={setShowSignUp} setForgetPassword={setForgetPassword} />
        }
      </div>

      <div className='absolute mr-4 translate-x-1/2 left-1/2 right-1/2 inset-0 z-40'>
        {
          forgetPassword && <ForgetPasswordModal setShowLogin={setShowLogin} closeforgetPassword={closeforgetPassword} goBack={goBack} />
        }
      </div>

      <div className='absolute translate-x-1/2 left-1/2 right-1/2 inset-0 z-40'>
        {
          showSignUp && <SignUpModal closeSignUp={closeSignUp} setShowLogin={setShowLogin} />
        }
      </div>

    </div>
  )

}

export default Header


