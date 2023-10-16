import React from "react";
import { widthStyle } from "../../../utils/generalStyle";

//assets
import works from "../../../assets/svg/howitworks.svg";
import { BsArrowRight } from "react-icons/bs";

export default function HowItWorks() {
  return (
    <section className="w-full my-20 ">
      <section
        className={`${widthStyle}  mx-auto py-8 flex flex-col  lg:flex-row justify-between  items-center`}
      >
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="lg:w-[50%]">
            <div className="flex items-center text-[var(--purple600)] ">
              <div className="bg-[var(--purple600)] w-2 h-4 mr-2"></div>

              <div className="text-sm font-medium">HOW ITS WORKS</div>
            </div>

            <div className="text-left">
              <h1 className=" my-4 lg:text-[37px] text-2xl font-bold lg:leading-[52px] lg:w-[90%]">
                Monitor and control your business while reducing revenue
                leakage.
              </h1>

              <p className="my-4 text-sm  w-full lg:w-[80%]">
                With Epump, you can monitor, control, and grow your business
                while reducing theft, fraud and revenue leakage.
              </p>

              <div className={`my-5 `}>
                <p className=" flex items-center text-[var(--purple600)] font-medium   text-sm rounded-full">
                  Learn more{" "}
                  <BsArrowRight
                    size={18}
                    color="#46266e"
                    className="mt-[5px] ml-2"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] lg:mt-0 mt-8">
            <img src={works} alt="How it works" />
          </div>
        </div>
      </section>
    </section>
  );
}
