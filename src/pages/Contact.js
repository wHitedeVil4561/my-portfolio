import React from "react";
import handshake from "../assets/img/handshake.jpg";
const Contact = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-darkred">Contact</span>
        <span className="text-neu text-3xl font-semibold">Contact with me</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center">
        <div className="w-full flex flex-col gap-5 box-shadow-10 p-5 rounded-lg">
          <div className="rounded-lg h-fit ">
            <img src={handshake} className="rounded-lg h-[240px] w-full" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-white">
                Deepak Kumar Gupta
              </span>
              <span className="text-neu">Full Stack Developer</span>
            </div>
            <div className="">
              <span className="text-neu">
                I am avaliable for freelance work. Connect with me via social
                media or call in to my account
              </span>
            </div>
          </div>
          <div className="social-icons flex flex-col gap-3">
            <span>Find with me</span>
            <div className="flex gap-3">
              <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
              <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
              <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="col-span-2 w-full h-fit">
          <div className="w-full  p-5 box-shadow-10 mx-auto flex flex-col gap-10 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-neu">Your Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-5 rounded-md linear-gradient-1 inner-shadow outline-none focus-within:border-2 focus-within:border-darkred text-white"
                  placeholder="Enter name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neu">Phone</label>
                <input
                  type="text"
                  className="w-full h-12 px-5 rounded-md linear-gradient-1 inner-shadow outline-none focus-within:border-2 focus-within:border-darkred text-white"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label className="text-neu">Email</label>
                <input
                  type="text"
                  className="w-full h-12 px-5 rounded-md linear-gradient-1 inner-shadow outline-none focus-within:border-2 focus-within:border-darkred text-white"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label className="text-neu">Subject</label>
                <input
                  type="text"
                  className="w-full h-12 px-5 rounded-md linear-gradient-1 inner-shadow outline-none focus-within:border-2 focus-within:border-darkred text-white"
                  placeholder="Enter subject"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label className="text-neu">Your message</label>
                <textarea
                  className="w-full  py-3 px-5 rounded-md linear-gradient-1 inner-shadow outline-none focus-within:border-2 focus-within:border-darkred text-white"
                  placeholder="Enter subject"
                />
              </div>
              <div className="col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-darkred text-xl font-semibold text-white mx-auto w-[200px] py-3 rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
