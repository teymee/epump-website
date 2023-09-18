import React from "react";

//assets
import logo from "../../assets/svg/logo.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import dropdown from "../../assets/svg/dropdown.svg";
import { widthStyle } from "../../utils/generalStyle";

export default function Navbar() {
  return (
    <nav className="bg-[var(--grey300)]  fixed w-full z-30">
      <section
        className={`${widthStyle}  h-[4.375rem] flex justify-between items-center`}
      >
        <div className="">
          <img src={logo} alt="Epump logo" />
        </div>

        <div className="flex justify-between ">
          <p className="mr-10 cursor-pointer">About</p>

          <div className="flex items-center mr-10 cursor-pointer">
            <p>Product</p>
            <img
              src={dropdown}
              alt="product nav dropdown"
              className="mt-1 ml-2"
            />
          </div>

          <p className="mr-10 cursor-pointer">Blog</p>

          <div className="flex items-center mr-10 cursor-pointer">
            <p>Support</p>
            <img
              src={dropdown}
              alt="product nav dropdown"
              className="mt-1 ml-2"
            />
          </div>
        </div>

        <div className="border-[1px] border-[var(--grey100)] rounded-full items-center flex px-4 py-1">
          <button>Login</button>

          <img src={rightArrow} alt="Login" className="w-4 mt-1 ml-2" />
        </div>
      </section>
    </nav>
  );
}
