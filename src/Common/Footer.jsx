import React from "react";
import { GoTag } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* download links section */}
      <div className="mt-5 py-6 bg-[#4BD9E0] rounded-t-3xl bg-gradient-to-r from-[#4ADDDE] via-[#848FFC] to-[#C663FC]">
        <div className="container flex flex-wrap justify-between items-center text-white gap-y-8">
          <div className="flex items-center gap-2 w-[270px]">
            <div className="w-[50px] h-[50px] bg-cover mt-2">
              <img
                src="https://static.thenounproject.com/png/1106292-200.png"
                alt=""
                className="h-full w-full filter invert"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Payment Options</h2>
              <p>Safe and secure payments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-[270px]">
            <div className="w-[50px] h-[55px] bg-cover mt-2">
              <img
                src="https://www.pikpng.com/pngl/b/535-5351468_png-file-svg-genuine-icon-clipart.png"
                alt=""
                className="h-full w-full filter invert"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Genuine Products</h2>
              <p>sourced directly from brands</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-[280px]">
            <GoTag className="text-5xl mt-2" />
            <div>
              <h2 className="text-2xl font-semibold">1500 Brands</h2>
              <p>Curated over 3Lakh+ Products</p>
            </div>
          </div>

          <div className="mt-2">
            <h2 className="text-sm font-semibold">Available on</h2>
            <Link className="flex gap-2">
              <div className="h-[41px] w-[127px]">
                <img src="https://www.jeevee.com/_next/static/media/android.9df413da.png" alt="" />
              </div>
              <Link className="h-[41px] w-[127px]">
                <img src="https://www.jeevee.com/_next/static/media/ios.e6a69aba.png" alt="" />
              </Link>
            </Link>
          </div>
        </div>
      </div>

      {/* footer-section */}
      <div className="bg-[#161616]">
        <div className="container flex flex-col md:flex-row md:justify-between py-8 text-[#DEDDDC] gap-y-5">
          <div>
            <div className="w-[150px] h-[31px] bg-cover">
              <img src="https://www.jeevee.com/_next/static/media/logo_white.1804497c.svg" alt="" />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <p>Jeevee Health Pvt. Ltd.</p>
              <p>910 Narayan Gopal Sadak</p>
              <p>Lazimpat, Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-3">
            <h2 className="font-semibold text-white">Get to Know Us</h2>
            <Link to="/about" className="pl-2">About Us</Link>
            <Link className="pl-2">Sell on Jeevee</Link>
          </div>

          <div className="flex flex-col gap-3 mt-3">
            <h2 className="font-semibold text-white">Connect with Us</h2>
            <div className="flex gap-2">
              <Link className="h-9 w-9 bg-cover">
                <img src="https://www.jeevee.com/_next/static/media/fb.270cfdf8.svg" alt="" />
              </Link>
              <Link className="h-9 w-9 bg-cover">
                <img src="https://www.jeevee.com/_next/static/media/insta.8eeb60c9.svg" alt="" />
              </Link>
              <Link className="h-9 w-9 bg-cover">
                <img src="https://www.jeevee.com/_next/static/media/tiktok.2ebf7d53.svg" alt="" />
              </Link>
              <Link className="h-9 w-9 bg-cover">
                <img src="https://www.jeevee.com/_next/static/media/youtube.925dccd7.svg" alt="" />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-white">For any Help You may Call us at</h2>
              <div className="flex gap-2">
                <p className="cursor-pointer">+977 98011-65960</p>
                <Link className="h-[22px] w-[22px] bg-cover">
                <img src="https://www.jeevee.com/_next/static/media/viber_circular.4b38e4a4.svg" alt="" />
              </Link>
              <Link className="h-[22px] w-[22px] bg-cover">
                <img src="https://www.jeevee.com/_next/static/media/whats_app.cbe8cef3.svg" alt="" />
              </Link>
              </div>
              <h2 className="cursor-pointer">01-5970680</h2>
              <p>(Sun to Fri, 9AM to 6PM)</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright-section */}
      <div className="bg-black">
        <div className="container text-white md:w-3/5 lg:w-1/2 flex justify-between items-center p-3">
          <Link>Terms & Conditions</Link>
          <Link>Policies</Link>
          <div className="text-[#DEDDDC]">© 2024, jeevee.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
