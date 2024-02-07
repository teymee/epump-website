import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import monitoring from "../../assets/svg/monitoring.svg";
import control from "../../assets/svg/control.svg";
import growth from "../../assets/svg/growth.svg";
import feature from "../../assets/svg/feature.svg";

export default function DarkSection() {
  const gridDiv = [
    {
      icon: monitoring,
      title: "Business Monitoring",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },

    {
      icon: control,
      title: "Control",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },

    {
      icon: growth,
      title: "Growth",
      desc: "A single platform that connects residents, security, and property managers to improve communication, safety, and efficiency",
    },
  ];

  return (
    <section className="bg-black900">
      <section className={`${widthStyle} py-20`}>
        <div className="text-white">
          <h1 className=" leading-normal text-center mx-auto my-4 lg:w-[60%] w-[95%] mx-auto lg:text-4xl text-2xl">
            Your Fuel Station Optimization Partner in Africa
          </h1>

          <p className=" text-center mx-auto my-4 lg:w-[50%] w-full mx-auto">
            Our innovative and user-friendly fuel station automation system
            helps you easily manage your fuel station operations from anywhere,
            anytime.{" "}
          </p>
        </div>

        <div className="grid items-center grid-cols-1 mt-10 text-white lg:gap-8 lg:grid-cols-3">
          {gridDiv.map((el) => {
            return (
              <div
                className="my-8 text-center lg:my-20 lg:text-left"
                key={el.title}
              >
                <div className="flex justify-center lg:justify-start">
                  <img src={el.icon} alt={el.title} />
                </div>
                <h3 className="my-4 text-lg font-semibold">{el.title}</h3>
                <p className="text-sm leading-normal w-[95%]">{el.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-between my-10 text-sm text-white lg:flex-row">
          <div>
            <h2 className="text-lg font-semibold text-center  lg:text-left lg:text-2xl">
              Simple Automation with <br /> no Downtime
            </h2>
            <p className=" my-4 lg:leading-loose  text-center lg:text-left lg:w-[70%] w-[95%] mx-auto lg:ml-0 ">
              The following types of data can be gathered from the the Epump Go
              dashboard
            </p>

            <ul className="mt-8 ml-4 list-disc">
              <li>Remote Monitoring</li>
              <li className="my-4">Simple automation & zero downtime</li>
              <li>Remote Monitoring</li>
            </ul>
          </div>

          <div>
            <img
              src={feature}
              alt="Product features"
              className="h-[450px] w-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
