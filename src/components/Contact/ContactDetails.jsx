import React from "react";

//assets
import phone from "../../assets/svg/phone.svg";
import message from "../../assets/svg/message.svg";
import ngn from "../../assets/svg/ngn.svg";
import kenya from "../../assets/svg/kenya.svg";
import circle from "../../assets/svg/circle.png";
import circle2 from "../../assets/svg/circle2.png";
export default function ContactDetails() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${circle}), url(${circle2})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: " 100% 98%,  100% 103%",
       
        }}
        className={`   lg:h-[110vh] bg-purple600 px-4 py-10 text-white lg:rounded-l-lg `}
      >
        <div>
          <h3 className="mb-4 lg:text-2xl text-lg">Get a quote</h3>

          <p className="text-sm ">
            Your message will be sent to our team, who will get back to you as
            soon as they can. Please be advised that weekends and public
            holidays might delay response time..
          </p>
        </div>

        <div className="my-10">
          <div className="flex items-center text-sm">
            <div className="w-[15%]">
              <img src={phone} alt="call us on" className="w-8" />
            </div>

            <div className="w-full">
              <div className="flex justify-between my-2">
                <p>+234-913-104-8999</p>
                <img src={ngn} alt="Nigerian phone number" />
              </div>

              <div className="flex justify-between">
                <p>+234-913-104-8999</p>
                <img src={kenya} alt="Kenya phone number" />
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm mt-4">
            <div className="w-[15%]">
              <img src={message} alt="call us on" className="w-8" />
            </div>

            <div className="w-full">
              <div className=" ">
                <p className="mb-2">info@epump.africa</p>
                <p>enquires@epump.africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
