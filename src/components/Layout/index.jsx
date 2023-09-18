import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <section>
      <section className="relative">
        <Navbar />
        <section className="absolute top-[4.4rem] w-full">{children}</section>

        <Footer />
      </section>
    </section>
  );
}
