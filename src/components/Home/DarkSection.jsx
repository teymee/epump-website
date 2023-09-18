import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import monitoring from "../../assets/svg/monitoring.svg";
import control from "../../assets/svg/control.svg";
import growth from "../../assets/svg/growth.svg";

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
              <div className="my-20">
                <img src={el.icon} alt={el.title} />
                <h3 className="my-4 text-lg font-semibold">{el.title}</h3>
                <p className="text-sm leading-normal w-[95%]">{el.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
