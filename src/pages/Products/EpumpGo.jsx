import React from "react";

//components
import Layout from "../../components/Layout";
import GOBanner from "../../components/Products/EpumpGo/Banner";
import HowItWorks from "../../components/Products/EpumpGo/HowItWorks";

export default function EpumpGo() {
  return (
    <Layout>
      <GOBanner />
      <HowItWorks/>
    </Layout>
  );
}
