import React from "react";

//components
import Layout from "../../components/Layout";
import HowItWorks from "../../components/Products/ATG/HowItWorks";
import PumpBanner from "../../components/Products/Pump/Banner";

export default function Pump() {
  return (
    <Layout>
      <PumpBanner />
      <HowItWorks/>
    </Layout>
  );
}
