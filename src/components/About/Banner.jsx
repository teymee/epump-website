import React from "react";
import { widthStyle } from "../../utils/generalStyle";

// assets
import about1 from "../../assets/svg/about1.svg";
import about2 from "../../assets/svg/about2.svg";
import about3 from "../../assets/svg/about3.svg";

export default function AboutBanner() {
  return (
    <section className="bg-grey300 pt-10">
      <section className={`${widthStyle} py-8 `}>
        <div>
          <div className="justify-center lg:justify-start">
            <div className="bg-purple100 w-[7rem] mx-auto lg:ml-0 rounded-md py-2 text-center ">
              <p className="text-purple600 text-sm font-semibold">
                About Epump
              </p>
            </div>

            <h1 className=" my-4 lg:text-[30px] text-2xl font-medium lg:leading-[40px] lg:w-[70%] lg:text-left text-center">
              We help stations in automation and keeping track of inventory
            </h1>
          </div>
        </div>

        <div className="my-10">
          <div className="grid grid-flow-col grid-cols-4 gap-1">
            <img
              src={about1}
              className="col-span-2 row-span-3 "
              alt="A man in a gas station"
            />

            <div className="grid col-span-2 gap-1 ">
              <img src={about2} className="" alt="A man in a gas station" />

              <img src={about3} className="" alt="A man in a gas station" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
