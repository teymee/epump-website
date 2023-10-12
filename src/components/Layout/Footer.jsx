import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import whiteLogo from "../../assets/svg/whiteLogo.svg";
import appleStore from "../../assets/svg/appStore.svg";
import appStore from "../../assets/svg/appleStore.svg";

export default function Footer() {
  return (
    <section className="bg-[var(--black700)]  w-full">
      <section className={`${widthStyle} py-20 text-white`}>
        <section className="border-b border-[var(--grey500)] pb-20">
          <h1 className="text-5xl text-center text-[var(--grey400)]">
            Automate your Fuel Station <br /> with us Today.
          </h1>

          <p className="w-[50%] mx-auto text-center mt-8">
            With Epump, you can monitor, control, and grow your business while
            reducing theft, fraud and revenue leakage.
          </p>

          <div className="flex justify-center mt-8">
            <button className=" border border-[var(--grey100)] text-white py-4 px-10 mr-8 text-sm rounded-full">
              Contact Us
            </button>
          </div>
        </section>

        <section className="grid grid-cols-6 my-8">
          <div>
            <img src={whiteLogo} alt="epump logo" />

            <img src={appStore} alt="get epump on app store" className="mt-4" />

            <img
              src={appleStore}
              alt="get epump on apple store"
              className="mt-4"
            />
          </div>
          <div>
            <h5 className="font-semibold">Company</h5>
            <p className="mt-4 text-sm">About us</p>
            <p className="mt-4 text-sm">Privacy policy</p>
          </div>
          <div>
            {" "}
            <h5 className="font-semibold">Product</h5>
            <p className="mt-4 text-sm">ATG</p>
            <p className="mt-4 text-sm">Epump GO</p>
          </div>
          <div>
            {" "}
            <h5 className="font-semibold">Support</h5>
            <p className="mt-4 text-sm">Blog</p>
            <p className="mt-4 text-sm">Help</p>
          </div>

          <div>
            <h5 className="font-semibold">Contact Us</h5>
            <p className="mt-4 text-sm"> Info@epump.africa</p>
            <p className="mt-4 text-sm">+234 800 000 000</p>
            <p className="mt-4 text-sm"> Info@epump.africa</p>
            <p className="mt-4 text-sm">+234 800 000 000</p>
          </div>
          <div>
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
