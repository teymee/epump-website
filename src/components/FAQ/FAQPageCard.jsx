import React, { useState } from "react";

//assets
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function FAQPageCard() {
  //usestates
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="px-2 py-6 border-t" onClick={openDropdown}>
      <div className="flex items-center justify-between">
        <p className=" font-medium text-black700">
          Can I change my plan later?
        </p>

        <div>
          {isOpen && <AiOutlineMinusCircle color=" #46266e" size={20} />}
          {!isOpen && <AiOutlinePlusCircle color=" #46266e" size={20} />}
        </div>
      </div>

      {isOpen && (
        <div className="w-[95%]">
          <p className="text-left text-grey700 text-sm my-4">
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </p>
        </div>
      )}
    </div>
  );
}
