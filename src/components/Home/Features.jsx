import React from "react";
import { widthStyle } from "../../utils/generalStyle";

export default function Features() {
  return (
    <section>
      <section className={`${widthStyle} py-20 `}>
        <div>
          <h1 className="text-4xl font-medium ">Features & Benefits</h1>
          <p className="text-[var(--grey200)] font-[300] my-2 w-[40%]">
            With Epump, you can monitor, control, and grow your business while
            reducing theft, fraud and revenue leakage.
          </p>
        </div>

        <div className="flex justify-between">
          <div>
         
          </div>

          <div></div>
        </div>
      </section>
    </section>
  );
}
