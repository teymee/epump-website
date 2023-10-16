import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <section className="">
      <Navbar />
      <section className=" pt-[2rem] w-full">{children}</section>
      <Footer />
    </section>
  );
}
