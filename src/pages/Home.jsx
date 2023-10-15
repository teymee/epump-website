import React from "react";

//components
import Layout from "../components/Layout";
import Banner from "../components/Home/Banner";
import DarkSection from "../components/Home/DarkSection";
import Features from "../components/Home/Features";
import OurProducts from "../components/Home/OurProducts";
import Blog from "../components/Home/Blog";
import HomeFAQ from "../components/Home/FAQ";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <DarkSection />
      <OurProducts />
      <Features />
      <Blog />
      <HomeFAQ/>
    </Layout>
  );
}
