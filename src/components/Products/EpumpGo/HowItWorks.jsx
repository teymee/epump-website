import React from "react";
import { widthStyle } from "../../../utils/generalStyle";

//assets
import works from "../../../assets/svg/goImg.svg";
import { BsArrowRight } from "react-icons/bs";

export default function HowItWorks() {
  return (
    <section className="w-full my-20 ">
      <section
        className={`${widthStyle}  mx-auto py-8 flex flex-col  lg:flex-row justify-between  items-center`}
      >
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="lg:w-[50%] lg:mt-0 mt-8 lg:mr-8">
            <img src={works} alt="How it works" />
          </div>

          <div className="lg:w-[50%]">
            <div className="flex items-center text-[var(--purple600)] ">
              <div className="bg-[var(--purple600)] w-2 h-4 mr-2"></div>

              <div className="text-sm font-medium">Benefits</div>
            </div>

            <div className="text-left">
              <h1 className=" my-4 lg:text-[37px] text-2xl font-bold lg:leading-[52px] lg:w-[90%]">
                Data you can effortlessly get while using Epump Go
              </h1>

              <p className="my-4 font-semibold text-grey900  text-sm  w-full lg:w-[80%]">
                The following types of data can be gathered from the the Epump
                Go dashboard
              </p>

              <ul className=" text-sm list-disc marker:text-[#d9d9d9] marker:w-40 leading-loose ml-4 font-semibold text-grey900">
                <li>Volume of products sold</li>
                <li>Products levels in tanks</li>
                <li>Sales by cash, POS, Credit</li>
                <li>Bank deposits and expenses, etc</li>
              </ul>

              <div className={`my-5 `}>
                <p className=" flex items-center text-[var(--purple600)] font-medium   text-sm rounded-full">
                  Contact sales
                  <BsArrowRight
                    size={18}
                    color="#46266e"
                    className="mt-[5px] ml-2"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
