import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//asssets
import { BsArrowRight } from "react-icons/bs";
import epumpGo from "../../assets/svg/epumpGo.svg";

export default function OurProducts() {
  return (
    <section className="bg-[var(--grey300)]">
      <section className={`${widthStyle} py-20 `}>
        <section>
          <h1 className="text-4xl font-medium ">Our Products</h1>
          <p className="text-[var(--grey200)] font-[300] my-2 w-[40%]">
            Showcasing some of the interesting products experiences powered by
            Epump
          </p>
        </section>

        <section className="flex items-center my-10 flex-col lg:flex-row">
          <div className="z-20 w-[45%] text-sm">
            <div className="flex items-center mb-4 cursor-pointer gap-x-4">
              <div className="w-2 h-2 mt-1 bg-black rounded-full"></div>
              <p>Epump GO</p>
            </div>

            <div className="flex items-center mb-2 cursor-pointer gap-x-4 ">
              {/* <div className="w-2 h-2 mt-1 bg-black rounded-full"></div> */}
              <p className="ml-6 text-[var(--grey200)] opacity-25">
                Automatic Tank Gauge(ATG)
              </p>
            </div>

            <div className="flex items-center mb-2 cursor-pointer gap-x-4 ">
              {/* <div className="w-2 h-2 mt-1 bg-black rounded-full"></div> */}
              <p className="ml-6 text-[var(--grey200)] opacity-25">Rectar</p>
            </div>

            <div className="flex items-center mb-2 cursor-pointer gap-x-4 ">
              {/* <div className="w-2 h-2 mt-1 bg-black rounded-full"></div> */}
              <p className="ml-6 text-[var(--grey200)] opacity-25">Payments</p>
            </div>
          </div>

          <div className="flex items-center flex-col lg:flex-row">
            <img
              src={epumpGo}
              alt="Product features and benefits"
              className="w-[530px]   "
            />
            <div className="text-sm">
              <p>
                Epump Go is a one-in-class forecourt controller, designed with
                the African technical and economic environment in focus.
              </p>

              <button className="  flex gap-x-2 items-center mt-10 border-black rounded-full border-[1px] py-2 px-3">
                {" "}
                Learn more
                <BsArrowRight size={20} className="mt-1" />
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
