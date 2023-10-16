import React from "react";
import Layout from "../../components/Layout";
import ATGBanner from "../../components/Products/ATG/Banner";
import HowItWorks from "../../components/Products/ATG/HowItWorks";

export default function ATG() {
  return (
    <Layout>
      <ATGBanner />
      <HowItWorks/>
    </Layout>
  );
}
