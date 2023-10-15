import React from "react";

//assets
import blogImg from "../../../assets/svg/blogImg.svg";
import { BsArrowRight } from "react-icons/bs";

export default function BlogCard() {
  return (
    <div className="border rounded-lg">
      <div>
        <img src={blogImg} alt="TITLE" className="h-[240px] w-full" />
      </div>

      <div className="px-4 py-4">
        <h4 className="font-medium ">Fuelmetrics rolls out IoT based tech</h4>

        <p className="my-4 text-sm text-[--grey600]">
          Fuelmetrics Limited, a leading energy automation company in Africa has
          rolled out its IOT enabled forecourt controllers...
        </p>

        <p className="flex font-medium gap-x-2">
          Learn more <BsArrowRight size={18} className="mt-[5px]" />
        </p>
      </div>
    </div>
  );
}
