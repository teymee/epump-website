import React from "react";
import { widthStyle } from "../../../utils/generalStyle";
import FAQCard from "./FAQCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function HomeFAQ() {
  return (
    <section className="">
      <section className={`${widthStyle} py-20 `}>
        <div className="text-center">
          <h1 className="text-4xl font-medium ">Frequently asked questions</h1>
          <p className="text-[var(--grey200)] font-[300] my-2     ">
            Everything you need to know about the product and services.
          </p>
        </div>

        <div className="w-[80%] mx-auto my-20">
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />

          <p className="flex items-center justify-center my-10 text-sm gap-x-2">
            View all FAQs
            <span>
              <BsFillArrowRightCircleFill className="mt-1" size={18} />
            </span>{" "}
          </p>
        </div>
      </section>
    </section>
  );
}
