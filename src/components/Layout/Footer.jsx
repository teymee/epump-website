import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import whiteLogo from "../../assets/svg/whiteLogo.svg";
import appleStore from "../../assets/svg/appStore.svg";
import appStore from "../../assets/svg/appleStore.svg";

export default function Footer() {
  return (
    <section className="bg-black700  w-full">
      <section className={`${widthStyle} py-20 text-white`}>
        <section className="border-b border-grey500 lg:pb-20 pb-10">
          <h1 className=" text-center text-grey400 lg:text-5xl text-2xl">
            Automate your Fuel Station <br /> with us Today.
          </h1>

          <p className=" mx-auto text-center mt-8 lg:w-[50%] w-full lg:text-lg text-sm">
            With Epump, you can monitor, control, and grow your business while
            reducing theft, fraud and revenue leakage.
          </p>

          <div className="flex justify-center mt-8">
            <button className=" border border-grey100 text-white py-4 px-10 lg:mr-8 text-sm rounded-full">
              Contact Us
            </button>
          </div>
        </section>

        <section className="grid  my-8 lg:grid-cols-6 grid-cols-1 lg:text-left text-center">
          <div className="flex flex-col mb-4  justify-center">
            <div className="flex justify-center">
              <img src={whiteLogo} alt="epump logo" />
            </div>

            <div className="  mt-4 lg:mt-0 flex lg:flex-col flex-row justify-center lg:justify-start items-center gap-x-4">
              <img
                src={appStore}
                alt="get epump on app store"
                className="mt-4 "
              />

              <img
                src={appleStore}
                alt="get epump on apple store"
                className="mt-4"
              />
            </div>
          </div>
          <div className="my-10 lg-my-0">
            <h5 className="font-semibold ">Company</h5>
            <p className="mt-4 text-sm">About us</p>
            <p className="mt-4 text-sm">Privacy policy</p>
          </div>
          <div className="my-10 lg-my-0">
            {" "}
            <h5 className="font-semibold">Product</h5>
            <p className="mt-4 text-sm">ATG</p>
            <p className="mt-4 text-sm">Epump GO</p>
          </div>
          <div className="my-10 lg-my-0">
            {" "}
            <h5 className="font-semibold">Support</h5>
            <p className="mt-4 text-sm">Blog</p>
            <p className="mt-4 text-sm">Help</p>
          </div>

          <div className="my-10 lg-my-0">
            <h5 className="font-semibold">Contact Us</h5>
            <p className="mt-4 text-sm"> Info@epump.africa</p>
            <p className="mt-4 text-sm">+234 800 000 000</p>
            <p className="mt-4 text-sm"> Info@epump.africa</p>
            <p className="mt-4 text-sm">+234 800 000 000</p>
          </div>
          <div className="my-10 lg-my-0">
            {" "}
            <h5 className="font-semibold">Contact Us</h5>
            <div>
              <p className="mt-4 text-sm font-semibold">West Africa</p>
              <p className="mt-2 text-xs">
                {" "}
                18 Ilupeju Byepass, <br /> Ilupeju, Lagos, Nigeria
              </p>
            </div>
            <div>
              <p className="mt-4 text-sm font-semibold">East Africa</p>
              <p className="mt-2 text-xs">
                {" "}
                Cassia Court, Block A2 , <br />
                Kiambere Road, Upper <br /> Hill, Nairobi, Kenya.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
