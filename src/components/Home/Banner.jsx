import React, { useEffect, useState } from "react";

//utils
import { widthStyle } from "../../utils/generalStyle";

//assets
import HomeBanner from "../UI/HomeBanner";

export default function Banner() {
  const [company, setCompany] = useState(0);

  useEffect(() => {
    const switchCompany = setInterval(() => {
      if (company === 0) {
        setCompany(1);
      } else {
        setCompany(0);
      }
    }, 3000);

    return () => {
      clearInterval(switchCompany);
    };
  }, [company]);
  return (
    <section className="py-12 lg:py-4 bg-grey300">
      <section
        className={`${widthStyle} py-8 flex flex-col  lg:flex-row justify-between  items-center `}
      >
        <div>
          <div className="flex justify-center lg:justify-start">
            <div className="bg-purple100 w-[11rem] rounded-md py-2 text-center ">
              <p className="text-sm font-semibold text-purple600 font-satoshi">
                For fuel station owners
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left font-satoshi">
            <h1 className=" my-5 lg:text-[3rem] text-2xl font-bold lg:leading-[52px] lg:w-full  ">
              The All-In-One Solution for Fuel Station Owners{" "}
            </h1>

            <p className="my-5] text-sm  w-full lg:w-[70%]">
              Epump gives you real-time insights into your operations, so you
              can make better decisions, save time, money, and resources
            </p>

            <div className={`my-5 `}>
              <button className="px-8 py-3 text-sm text-white rounded-full bg-purple600 lg:py-4 lg:px-10 lg:mr-8">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <HomeBanner />
          </div>
        </div>
      </section>
    </section>
  );
}
