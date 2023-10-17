import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import feature from "../../assets/svg/feature.svg";
import about4 from "../../assets/svg/about4.svg";
import about5 from "../../assets/svg/about5.svg";
import about6 from "../../assets/svg/about6.svg";

export default function AboutNote() {
  const arr = [
    {
      image: about5,
      title: "Founded in 2015",
      text: "A single platform that connects residents, security, and property managers to improve safety, and efficiency",
    },

    {
      image: about4,
      title: "1k+ stations automated",
      text: "A single platform that connects residents, security, and property managers to improve safety, and efficiency",
    },

    {
      image: about6,
      title: "500+ Business clients",
      text: "A single platform that connects residents, security, and property managers to improve safety, and efficiency",
    },
  ];

  return (
    <section className="">
      <section className={`${widthStyle} py-20 `}>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="lg:w-[40%] lg:text-left text-center">
            <h1 className="text-[var(--black700)] text-4xl font-medium mb-4">
              About us
            </h1>
            <p className="text-[var(--black700)] ">
              Epump is a leading automation and solution development company
              operating in Africa. The company was born out of a need to fill
              the gap in the provision of top-notch automation and software
              solution, particularly in the downstream oil and gas sector. Our
              aim is to provide end to end solutions to the challenges of
              downstream sector of the oil and gas industry across Africa. Our
              solutions are tailored to meet specific needs of the oil and gas
              industry, providing solutions to the biggest without sacrificing
              flexibility to accomodate smaller clients. We go the extra miles
              to bring satisfaction to our clients.
            </p>
          </div>

          <div>
            <img
              src={feature}
              alt="Product features"
              className="h-[450px] w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 my-40 lg:gap-4 gap-y-20 lg:grid-cols-3">
          {arr.map((el) => {
            return (
              <div>
                <div className="flex justify-center ">
                  <div className="px-5 py-4 rounded shadow-lg shadow-indigo-500/30 ">
                    <img src={el.image} alt={el.title} />
                  </div>
                </div>

                <h3 className="mt-6 text-center text-[var(--purple700)] font-medium">
                  {el.title}
                </h3>

                <p className="mt-4 text-sm text-center w-[80%] mx-auto">
                  {el.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
