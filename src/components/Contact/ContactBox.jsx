import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactBox() {
  return (
    <section className="flex flex-col lg:flex-row w-full lg:h-[110vh] bg-white">
      <div className="lg:w-[60%] w-full">
        <ContactDetails />
      </div>

      <ContactForm />
    </section>
  );
}
