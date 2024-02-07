import React from "react";

export default function ContactForm() {
  return (
    <div className="px-8 w-full rounded-r-lg">
      <form className="w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 w-full lg:mt-6 mt-0">
          <div>
            <label className="block lg-mt-0 mt-4">Station name</label>

            <input
              placeholder="Station name"
              className="w-full border border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block lg-mt-0 mt-4">Email address</label>

            <input
              placeholder="example@email.com"
              className=" w-full border border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 w-full lg:mt-6 mt-0">
          <div>
            <label className="block lg-mt-0 mt-4">Contact person’s name</label>

            <input
              placeholder="Contact person’s name"
              className="w-full border-[1px] border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block lg-mt-0 mt-4">Station location</label>

            <input
              placeholder="Station address"
              className=" w-full border border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 w-full lg:mt-6 mt-0">
          <div>
            <label className="block lg-mt-0 mt-4">Phone number</label>

            <input
              placeholder="Phone number"
              className="w-full border-[1px] border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block lg-mt-0 mt-4">Number of fuel pumps</label>

            <input
              placeholder="Number of fuel pumps"
              className=" w-full border border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 w-full lg:mt-6 mt-0">
          <div>
            <label className="block lg-mt-0 mt-4">Pump model</label>

            <input
              placeholder="Pump model"
              className="w-full border-[1px] border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block lg-mt-0 mt-4">Number of tanks</label>

            <input
              placeholder="Number of tanks"
              className=" w-full border border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div className=" w-full lg:mt-6 mt-0">
          <div>
            <label className="block lg-mt-0 mt-4">Message</label>

            <textarea
              rows={3}
              placeholder="Give as much details as possible..."
              className="w-full border-[1px] border-grey500 bg-grey400 pl-2 py-2 rounded mt-2 placeholder:text-sm"
            ></textarea>
          </div>
        </div>

        <button className="bg-purple600 rounded-full w-full py-2 text-white mt-4">
          Send
        </button>
      </form>
    </div>
  );
}
