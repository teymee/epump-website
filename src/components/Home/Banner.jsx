import React, { useEffect, useState } from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import banner from "../../assets/svg/banner.svg";
import HomeBanner from "../UI/HomeBanner";
import Banner2 from "../UI/Banner2";
import Banner3 from "../UI/Banner3";

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
  // console.log(company);
  return (
    <section className="bg-grey300 py-10">
      <section
        className={`${widthStyle} py-8 flex flex-col  lg:flex-row justify-between  items-center`}
      >
        <div>
          <div className="flex justify-center lg:justify-start">
            <div className="bg-purple100 w-[11rem] rounded-md py-2 text-center ">
              <p className="text-sm font-semibold text-purple600">
                For fuel station owners
              </p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className=" my-5 lg:text-[37px] text-2xl font-bold lg:leading-[52px] lg:w-[90%]">
              The Fuel Station Automation System Built for You.
            </h1>

            <p className="my-5] text-sm  w-full lg:w-[70%">
              Epump gives you real-time insights into your operations, so you
              can make better decisions, save time, money, and resources.{" "}
            </p>

            <div className={`my-5 `}>
              <button className="bg-[var(--purple600)] text-white lg:py-4 lg:px-10 py-3 px-8 lg:mr-8 text-sm rounded-full">
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
