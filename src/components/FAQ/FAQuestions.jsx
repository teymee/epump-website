import React from "react";
import FAQCard from "../Home/FAQ/FAQCard";
import FAQPageCard from "./FAQPageCard";

export default function FAQuestions() {
  const active = "text-[var(--purple600)] font-medium my-3 cursor-pointer";
  const inActive = "text-violet200 my-3 cursor-pointer";

  return (
    <section className="flex flex-col px-4 py-10 border rounded-lg lg:flex-row gap-x-8">
      <div className="hidden lg:block uppercase w-[30%]">
        <p className={`${inActive}`}>GENERAL</p>
        <p className={`${inActive}`}>Maintenance and Service</p>
        <p className={`${active}`}>SUBSCRIPTION AND BILLING</p>
      </div>

      <div className="block w-full my-4 lg:hidden">
        <div className="bg-violet50 text-[var(--purple600)] py-2 px-2 font-bold rounded">
          <p className={``}>GENERAL</p>
        </div>
      </div>
      <div className="lg:w-[70%]">
        <div className="w-full">
          <FAQPageCard />
          <FAQPageCard />
          <FAQPageCard />
        </div>
      </div>
    </section>
  );
}
