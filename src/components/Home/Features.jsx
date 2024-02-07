import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//asssets
import benefits from "../../assets/svg/benefits.svg";

export default function Features() {
  const gridDiv = [
    {
      title: "Business Monitoring",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },

    {
      title: "Control",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },

    {
      title: "Growth",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },

    {
      title: "Growth",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },
  ];
  return (
    <section>
      <section className={`${widthStyle} py-20 `}>
        <div>
          <h1 className=" font-medium lg:text-4xl text-2xl text-center lg:text-left">
            Features & Benefits
          </h1>
          <p className="text-black700 lg:text-grey200 lg:font-[300]  font-normal my-2 lg:w-[40%] w-full text-center lg:text-left text-sm lg:text-lg mb-10 lg:mb-0">
            With Epump, you can monitor, control, and grow your business while
            reducing theft, fraud and revenue leakage.
          </p>
        </div>

        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="grid  lg:gap-8 gap-y-4 items-center  lg:grid-cols-2 grid-cols-1 lg:w-[50%] w-full ">
            {gridDiv.map((el) => {
              return (
                <div
                  className="text-grey600 font-[300] text-center lg:text-left"
                  key={el.title}
                >
                  <h2 className=" text-sm text-grey600 font-semibold lg:my-4 my-2">
                    {el.title}
                  </h2>
                  <p className="lg:text-sm text-xs leading-normal w-[90%] lg:w-full mx-auto ">
                    {el.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="lg:mt-0 mt-20">
            <img
              src={benefits}
              alt="Product features and benefits"
              className="lg:w-[330px] w-[250px]  "
            />
          </div>
        </div>
      </section>
    </section>
  );
}
