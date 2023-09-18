import React from "react";
import { widthStyle } from "../../utils/generalStyle";

export default function Banner() {
  return (
    <section className="">
      <section
        className={`${widthStyle} my-10 flex justify-between items-center`}
      >
        <div>
          <div className="bg-[var(--purple100)] w-[11rem] rounded-md py-2 text-center">
            <p className="text-[var(--purple600)] text-sm font-semibold">
              For fuel station owners
            </p>
          </div>

          <div>
            <h1 className=" my-6 text-5xl font-bold leading-[62px]">
              Cloud Based Forecourt <br /> Automation Solution <br /> for
              Africa.
            </h1>

            <p className="my-6">
              Epump gives you real-time insights into your operations, so you
              can <br /> make better decisions, save time, money, and resources.{" "}
            </p>

            <div className="my-6">
              <button className="bg-[var(--purple600)] text-white py-4 px-10 mr-8 text-sm rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div>
          <p>Image</p>
        </div>
      </section>
    </section>
  );
}
