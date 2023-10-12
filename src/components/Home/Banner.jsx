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
    <section className="">
      <section
        className={`${widthStyle} py-8 flex justify-between  items-center`}
      >
        <div>
          <div className="bg-[var(--purple100)] w-[11rem] rounded-md py-2 text-center">
            <p className="text-[var(--purple600)] text-sm font-semibold">
              For fuel station owners
            </p>
          </div>

          <div>
            <h1 className=" my-5 text-5xl font-bold leading-[52px]">
              The Fuel Station <br /> Automation System Built for You.
            </h1>

            <p className="my-5 w-[70%] text-sm">
              Epump gives you real-time insights into your operations, so you
              can make better decisions, save time, money, and resources.{" "}
            </p>

            <div className={`my-5 `}>
              <button className="bg-[var(--purple600)] text-white py-4 px-10 mr-8 text-sm rounded-full">
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
