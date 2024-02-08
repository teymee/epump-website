import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { widthStyle } from "../../utils/generalStyle";

//assets
import logo from "../../assets/svg/logo.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";
import dropdown from "../../assets/svg/dropdown.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import PageTransition from "../UI/PageTransition";

export default function Navbar() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  // const insertAnimation = (e, path) => {
  //   e.preventDefault();
  //   console.log(path);
  //   console.log("jfdk");
  //   setReady(true);

  //   setTimeout(() => {
  //     setReady(false)
  //     navigate(path);
  //   }, 1000);

  // };

  return (
    <>
      {ready && <PageTransition />}
      {!ready && (
        <nav className="fixed z-30 w-full bg-grey300 ">
          <section
            className={`${widthStyle}  h-[4.375rem] flex justify-between items-center`}
          >
            <NavLink
              to="/"
              // onClick={(e) => insertAnimation(e, "/pbout")}
            >
              <div className="">
                <img src={logo} alt="Epump logo" />
              </div>
            </NavLink>

            <div className="block lg:hidden">
              <GiHamburgerMenu size={20} />
            </div>

            <div className="justify-between hidden text-sm lg:flex ">
              <NavLink
                to="/about"
                // onClick={(e) => insertAnimation(e, "/pbout")}
              >
                <p className="mr-10 cursor-pointer">About</p>
              </NavLink>

              <div className="dropdownNav">
                <div className="flex items-center mr-10 cursor-pointer productNav">
                  <p>Product</p>
                  <img
                    src={dropdown}
                    alt="product nav dropdown"
                    className="mt-1 ml-2"
                  />
                </div>

                {/* <div className="text-center shadow productDropdown">

                  <p>ATG</p>
                  <p>Epump GO</p>
                  <p>Epump Prime</p>
                </div> */}
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

            <div className="border-[1px] border-grey100 rounded-full items-center lg:flex px-4 py-1 text-sm hidden">
              <button>Login</button>

              <img src={rightArrow} alt="Login" className="w-4 mt-1 ml-2" />
            </div>
          </section>
        </nav>
      )}
    </>
  );
}
