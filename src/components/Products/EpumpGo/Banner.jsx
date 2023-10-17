import React from "react";

//UTILS

import { widthStyle } from "../../../utils/generalStyle";

//asssets
import epumpGo from "../../../assets/svg/epumpGo.svg";

export default function GOBanner() {
  return (
    <section className="bg-[var(--grey300)]">
      <section
        className={`${widthStyle}  py-8 flex flex-col  lg:flex-row justify-between  items-center lg:h-screen overflow-y-hidden`}
      >
        <div>
          <div className="flex justify-center lg:justify-start">
            <div className="bg-[var(--purple100)] w-[6rem] rounded-md py-2 text-center ">
              <p className="text-[var(--purple600)] text-sm font-semibold">
              Epump GO
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className=" my-5 lg:text-[37px] text-2xl font-bold lg:leading-[52px] lg:w-[90%]">
            A one-in- class forecourt controller
            </h1>

            <p className="my-5] text-sm  w-full lg:w-[70%]">
              With Epump, you can monitor, control, and grow your business while
              reducing theft, fraud and revenue leakage.
            </p>

            <div className={`my-10 `}>
              <button className="bg-[var(--purple600)] text-white lg:py-4 lg:px-10 py-3 px-8 lg:mr-8 text-sm rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img
              src={epumpGo}
              alt="Epump Go"
              className="    w-[90%] mx-auto"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
