import React from "react";

//utils
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
        <section className="text-white text-center">
          <h1 className=" leading-normal  mx-auto my-4 lg:w-[50%] w-[95%] lg:text-4xl text-2xl font-satoshi font-medium">
            Your Fuel Station Optimization Partner in Africa
          </h1>

          <p className=" mx-auto my-4 lg:w-[50%] w-full font-grotesk">
            Our innovative and user-friendly fuel station automation system
            helps you easily manage your fuel station operations from anywhere,
            anytime.{" "}
          </p>
        </section>

        <section className="grid items-center justify-center grid-cols-1 mt-10 text-white lg:gap-8 lg:grid-cols-3 ">
          {gridDiv.map((el) => {
            return (
              <div
                className="my-8 text-center lg:my-20 lg:text-left "
                key={el.title}
              >
                <div className="flex justify-center lg:justify-start">
                  <img src={el.icon} alt={el.title} />
                </div>
                <h3 className="my-4 text-lg font-semibold">{el.title}</h3>
                <p className="text-sm leading-normal ">{el.desc}</p>
              </div>
            );
          })}
        </section>

        <section className="flex flex-col items-center justify-between my-10 text-sm text-white lg:flex-row">
          <section>
            <h2 className="text-lg font-semibold text-center  lg:text-left lg:text-3xl font-satoshi">
              Simple Automation with <br /> no Downtime
            </h2>
            <p className=" font-grotesk my-4 lg:leading-loose  text-center lg:text-left lg:w-[70%] w-[95%] mx-auto lg:ml-0 ">
              The following types of data can be gathered from the the Epump Go
              dashboard
            </p>

            <ul className="mt-8 ml-4 list-disc font-grotesk">
              <li>Remote Monitoring</li>
              <li className="my-4">Simple automation & zero downtime</li>
              <li>Remote Monitoring</li>
            </ul>
          </section>

          <section>
            <img src={feature} alt="Product features" className=" w-full" />
          </section>
        </section>
      </section>
    </section>
  );
}
