import React from "react";
import Layout from "../components/Layout";
import { widthStyle } from "../utils/generalStyle";
import FAQuestions from "../components/FAQ/FAQuestions";

export default function FAQ() {
  return (
    <Layout>
      <section className="bg-grey300">
        <section className={`${widthStyle} py-20 `}>
          <div className="my-8 text-center">
            <h1  className="text-3xl font-medium">Frequently asked questions</h1>
            <p className="my-4">Everything you need to know about the product and services.</p>
          </div>
          <FAQuestions />
        </section>
      </section>
    </Layout>
  );
}
