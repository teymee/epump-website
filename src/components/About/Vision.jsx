import React from "react";
import { widthStyle } from "../../utils/generalStyle";

//assets
import vision1 from "../../assets/svg/vision1.svg";
import vision2 from "../../assets/svg/vision2.svg";

export default function Vision() {
  return (
    <section className="h-screen mb-20 lg:mb-0">
      <section className={`${widthStyle} lg:py-10`}>
        <div className="flex flex-col-reverse items-center justify-between mt-4 lg:flex-row lg:mt-0">
          <div className="relative mt-10  lg:w-[60%] w-full ">
            <div>
              <img
                src={vision1}
                alt="Team work"
                className=" w-[9.6rem] lg:w-full "
              />
            </div>

            <div>
              <img
                src={vision2}
                alt="Team work"
                className="absolute lg:right-[7rem] right-0 top-20  w-[9.6rem] lg:w-full"
              />
            </div>
          </div>

          <div className="lg:w-[40%] text-center lg:text-left">
            <h1 className="text-black700 text-4xl font-medium mb-4">
              Our Vision
            </h1>
            <p className="text-black700 ">
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
        </div>
      </section>
    </section>
  );
}
