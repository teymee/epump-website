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
    <section className="bg-[var(--black900)]">
      <section className={`${widthStyle} py-20`}>
        <div className="text-white">
          <h1 className="text-4xl leading-normal w-[60%] text-center mx-auto my-4">
            Your Fuel Station Optimization Partner in Africa
          </h1>

          <p className="w-[50%] text-center mx-auto my-4">
            Our innovative and user-friendly fuel station automation system
            helps you easily manage your fuel station operations from anywhere,
            anytime.{" "}
          </p>
        </div>

        <div className="grid items-center grid-cols-3 gap-8 mt-10 text-white">
          {gridDiv.map((el) => {
            return (
              <div className="my-20" key={el.title}>
                <img src={el.icon} alt={el.title} />
                <h3 className="my-4 text-lg font-semibold">{el.title}</h3>
                <p className="text-sm leading-normal w-[95%]">{el.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between my-10 text-sm text-white">
          <div>
            <h2 className="text-2xl font-semibold">Simple Automation with <br/> no Downtime</h2>
            <p className="w-[70%] my-4 leading-loose ">
              The following types of data can be gathered from the the Epump Go
              dashboard
            </p>

            <ul className="mt-4 ml-4 list-disc">
              <li>Remote Monitoring</li>
              <li className="my-2">Remote Monitoring</li>
              <li>Remote Monitoring</li>
            </ul>
          </div>

          <div>
            <img src={feature} alt="Product features" className="h-[450px] w-full"/>
          </div>
        </div>
      </section>
    </section>
  );
}
