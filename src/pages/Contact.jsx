import React from "react";
import { widthStyle } from "../utils/generalStyle";

//components
import Layout from "../components/Layout";
import ContactBox from "../components/Contact/ContactBox";

//assets
import right from "../assets/svg/contact-right.svg";
import left from "../assets/svg/contact-left.svg";
export default function Contact() {
  return (
    <Layout>
      <section>
        <section
          style={{
            backgroundImage: `url(${right}), url(${left})`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: " 100% 70%,  1% 60%",
          }}
          className="bg-[var(--grey300)]"
        >
          <section className={`${widthStyle} py-20 `}>
            <div className="text-center">
              <h1 className="text-lg lg:text-2xl my-4 font-medium">
                Contact us
              </h1>
              <p className="text-[var(--black700)]">
                Send us a message, and we'll respond to you shortly.
              </p>
            </div>

            <section className="my-10 lg:w-[95%] w-full mx-auto">
              <ContactBox />
            </section>
          </section>
        </section>
      </section>
    </Layout>
  );
}
