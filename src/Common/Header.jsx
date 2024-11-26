import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoCameraOutline, IoFlame, IoMenuSharp } from "react-icons/io5";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineNoteAlt } from "react-icons/md";
import {
  PiBellRingingLight,
  PiHandCoinsDuotone,
  PiWechatLogoLight,
} from "react-icons/pi";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";
// import Categories from '../components/Categories';
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";

export default function Header() {
  const [showflag, setShowflag] = useState(false);
  const [active, setActive] = useState("");
  const alphabets = [
    "ALL",
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 7;
  const totalItems = alphabets.length;
  const visibleAlphabets = alphabets.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  function prevPage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  }
  const nextPage = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const disablePrev = currentIndex <= 0;
  const disableNext = currentIndex >= totalItems - itemsPerPage;

  return (
    <div className="max-w-full">
      {/* top-navbar */}
      <div className="container h-[50px] md:h-[72px] grid grid-cols-5 md:grid-cols-4 lg:grid-cols-12 my-auto items-center justify-between">
        <div className="flex items-center col-span-2 gap-2 md:col-span-1 lg:col-span-2">
          <IoMenuSharp className="flex text-2xl lg:hidden" />
          <Link
            to="/"
            className="min-h-[15px] min-w-[72px] md:h-[21px] md:w-[102px]"
          >
            <img src="../header-logo.svg" alt="jevee logo" />
          </Link>
        </div>
        <ul className="flex items-center justify-between col-span-3 md:col-span-3 lg:col-span-10">
          <li className="hidden lg:flex">
            <h2 className="font-bold">CATEGORIES</h2>
          </li>
          <li className="cursor-pointer relative group hidden lg:flex flex-col">
            <h2 className="font-bold">BRANDS</h2>

            <ul className="transform -translate-x-1/2 -translate-y-1/2 top-[150px] left-1/2 w-[420px] absolute hidden group-hover:flex flex-col justify-center pt-10 z-30 px-4 bg-white">
              <div className="flex items-center border p-2 rounded-full">
                <GoSearch className="text-black text-xl" />
                <input
                  type="search"
                  className="outline-none bg-transparent px-2"
                  placeholder="Search brands"
                />
              </div>

              <div className="relative">
                <div className="mx-4 mt-4 flex items-center gap-2 w-full">
                  {visibleAlphabets.map((alphabet) => (
                    <div
                      key={alphabet}
                      onClick={() => setActive(alphabet)}
                      className={`py-1 mx-2 ${
                        active === alphabet ? "text-pink-500" : ""
                      } px-2 hover:border-b-2  hover:border-b-pink-500`}
                    >
                      {alphabet}
                    </div>
                  ))}
                </div>
                <div className="mx-2 absolute inset-y-0 top-3 left-[-20px] flex items-center justify-center w-10">
                  <button
                    onClick={prevPage}
                    disabled={disablePrev}
                    className={`rounded-full  border p-2 shadow-xl ${
                      disablePrev ? "bg-white cursor-default" : ""
                    }`}
                  >
                    <FaChevronLeft />
                  </button>
                </div>
                <div className="mx-2 absolute inset-y-0 top-3 right-[-20px] flex items-center justify-center w-10 ">
                  <button
                    onClick={nextPage}
                    disabled={disableNext}
                    className={`rounded-full border p-2 shadow-xl ${
                      disableNext ? "bg-white cursor-default" : ""
                    }`}
                  >
                    <FaAngleRight />
                  </button>
                </div>
              </div>

              <div className="bg-[#FEF2F2] flex flex-col items-center py-4 my-5">
                <h2 className="text-xl text-[#F25CA8]">
                  could not connect to inventory
                </h2>
                <p>Retry</p>
              </div>
            </ul>
          </li>
          <li className="hidden md:flex items-center gap-2 bg-[#F8F8F8] rounded-full py-1 pl-2 pr-10">
            <GoSearch className="text-blue-400 text-xl" />
            <div>
              <input
                type="search"
                className="outline-none text-sm bg-transparent px-2"
                placeholder="Search for medicine..."
              />
            </div>
          </li>
          <li className="hidden lg:flex bg-[#F25CA8] items-center px-4 rounded-md gap-2 py-[1px] text-white">
            <IoCameraOutline className="text-4xl" />{" "}
            <p className="text-[12px]">
              Upload <br />
              <span className="font-semibold text-sm">Prescriptions</span>
            </p>
          </li>

          <li className="relative group cursor-pointer flex justify-between items-center gap-[1px]">
            <FaRegUser className="text-2xl md:text-3xl" />
            <div className="hidden xl:flex flex-col">
              <p className="text-[12px]">HelloUser</p>
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                My Account{" "}
              </h2>
              <ul className="absolute border-x border-b bg-[#F8F8F8] hidden group-hover:flex flex-col top-10 right-0 z-30 rounded-md">
                <li className="px-3 py-2 flex justify-center items-center border-b hover:bg-[#F4F5F7]">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-[#51CDE7] via-[#7895FC] to-[#C167FC] px-3 py-2 text-white rounded-full w-[250px]">
                    <IoFlame className="text-xl" /> <h2>Jeevee Offers</h2>
                  </div>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <FaRegUser className="text-xl" />
                  <h2>Join Jeevee</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <LiaPhoneVolumeSolid className="text-xl" />
                  <h2>Contact Us</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <HiOutlineInformationCircle className="text-xl" />
                  <h2>About Us</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <MdOutlineNoteAlt className="text-xl" />
                  <h2>Terms & Conditions</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <GiNotebook className="text-xl" />
                  <h2>Policies</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <PiWechatLogoLight className="text-xl" />
                  <h2>Feedback</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b hover:bg-[#F4F5F7]">
                  <PiHandCoinsDuotone className="text-xl" />
                  <h2>Sell on Jeevee</h2>
                </li>
                <li className="flex py-2 px-6 gap-4 items-center border-b">
                  <SlLogin className="text-xl" />
                  <h2>Login</h2>
                </li>
              </ul>
            </div>
            <IoIosArrowDown className="mt-2 md:mt-5" />
          </li>

          <li className="cursor-pointer">
            <BsCart2 className="text-2xl" />
          </li>
          <li className="cursor-pointer">
            <PiBellRingingLight className="text-2xl" />
          </li>
          <li
            className="cursor-pointer flex items-center gap-2 relative"
            onClick={() => setShowflag(!showflag)}
          >
            <div className="h-[15px] w-[24px]">
              <img src="../us-flag.png" alt="" className="w-full h-full" />
            </div>
            <IoIosArrowDown />
            {showflag && (
              <div className="absolute bg-white right-0 top-9 flex flex-col items-center justify-center py-1 border z-30 rounded-sm">
                <div className="cursor-pointer flex gap-3 px-5 py-2 hover:bg-[#F4F5F7]">
                  <div className="h-[20px] w-[30px] bg-cover">
                    <img
                      src="../us-flag.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-sm">English</h2>
                </div>
                <div className="cursor-pointer flex gap-3 px-5 py-2 w-full hover:bg-[#F4F5F7]">
                  <div className="h-[20px] w-[30px] bg-cover">
                    <img
                      src="../np-flag.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-sm">नेपाली</h2>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="container flex md:hidden gap-1 pt-1 pb-2 items-center">
        <GoSearch className="text-blue-400 text-3xl ml-4" />
        <input
          type="search"
          className="w-full outline-none text-sm bg-transparent px-2"
          placeholder="Search for products, medicine..."
        />
      </div>

      {/* bottom navbar */}

      {/* <Categories /> */}
      <hr />
    </div>
  );
}

export default Header

