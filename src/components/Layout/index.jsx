import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "../UI/PageTransition";

export default function Layout({ children }) {
  return (
    <section className="">
      {/* <PageTransition /> */}

      <Navbar />

      <section className=" lg:pt-[2rem]  w-full">{children}</section>
      <Footer />
    </section>
  );
}
