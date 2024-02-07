import React from "react";
import { widthStyle } from "../../../utils/generalStyle";
import BlogCard from "./BlogCard";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Blog() {
  return (
    <section className="bg-grey300">
      <section className={`${widthStyle} py-8 `}>
        <div className="w-full pb-2 lg:border-b">
          <h1 className="font-medium   lg:text-4xl text-2xl text-center lg:text-left">From the blog</h1>
        </div>

        <div className="my-10">
          <div className="grid  gap-4 lg:grid-cols-3 grid-cols-1">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <p className="flex items-center justify-center my-20 text-lg gap-x-4">
            View all blog posts{" "}
            <span>
              <BsFillArrowRightCircleFill className="mt-1" size={20} />
            </span>{" "}
          </p>
        </div>
      </section>
    </section>
  );
}
