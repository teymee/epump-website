import React from "react";
import { widthStyle } from "../../utils/generalStyle";

// assets
import team1 from "../../assets/svg/team1.svg";
import team2 from "../../assets/svg/team2.svg";
import team3 from "../../assets/svg/team3.svg";

export default function Team() {
  return (
    <section className="bg-grey300">
      <section className={`${widthStyle} py-20 `}>
        <div className="flex flex-col justify-between text-center lg:text-left lg:flex-row ">
          <div className="lg:w-[40%] ">
            <h2 className="lg:text-3xl text-2xl lg:w-[90%] font-medium">
              We don't just work, we have fun too
            </h2>
          </div>

          <div className=" lg:w-[50%] lg:mt-0 mt-4">
            <p>
              We are a team of engineers, entrepreneurs, designers and artists
              working together with a singular mission of building a new and
              better future of successful and permission-less entrepreneurship
              for everyone.
            </p>
          </div>
        </div>

        <div className="my-20">
          <div>
            <img src={team3} alt="team" className="rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
          </div>
        </div>

        <div>
          <h1 className="text-4xl text-center">Join Epump</h1>
          <p className="lg:w-[50%] mx-auto text-center my-4">
            We aspire to be the change we want to see in the world, which is why
            we’re committed to building a diverse and inclusive team at Epump We
            welcome and encourage candidates of all backgrounds to apply.{" "}
          </p>

          <div className="flex justify-center ">
            <button className="flex  py-1 gap-x-4 bg-[var(--purple600)] text-white rounded-full text-sm  px-4">
              <span>See opening</span>{" "}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
