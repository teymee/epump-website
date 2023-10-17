import React from "react";
import { widthStyle } from "../../utils/generalStyle";

// assets
import team1 from "../../assets/svg/team1.svg";
import team2 from "../../assets/svg/team2.svg";
import team3 from "../../assets/svg/team3.svg";

export default function Team() {
  return (
    <section className="bg-[var(--grey300)]">
      <section className={`${widthStyle} py-20 `}>
        <div className="flex justify-between ">
          <div className="w-[40%]">
            <h2 className="text-3xl w-[90%] font-medium">
              We don't just work, we have fun too
            </h2>
          </div>

          <div className="w-[50%]">
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
          <p className="w-[50%] mx-auto text-center my-4">
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
