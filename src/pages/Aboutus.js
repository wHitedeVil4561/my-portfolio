import React from "react";
import profile from "../assets/img/2018041054.jpg";
import angular from "../assets/img/angular.png";
import reactlogo from "../assets/img/reactlogo.svg";
import nodejs from "../assets/img/nodejs.png";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import instagram from "../assets/img/instagram.svg";

const Aboutus = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2 items-center mt-20">
      <div className="">
        <div className="flex flex-col gap-5">
          <div className="tracking-widest text-white">WELCOME TO MY WORLD</div>
          <div className="text-3xl text-white tracking-widest">
            Hi, I'm <span className="text-darkred">Deepak Gupta</span>
          </div>
          <div className="text-white text-3xl flex gap-2">
            <span>a</span>
            <div className="designation">
              <span className="">Full Stack Developer.</span>
            </div>
          </div>

          <div className="summary">
            <span className="text-neu text-xl">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </span>
          </div>

          <div className="flex justify-between smmax:flex-col gap-10 mt-10">
            <div className="flex flex-col gap-5">
              <span className="text-neu">Find with me</span>
              <div className="social-icon flex gap-5">
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg flex items-center justify-center">
                  <img className="w-4/5" alt="Angular" src={linkedin} />
                </div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg flex items-center justify-center">
                  <img className="w-4/5" alt="Angular" src={github} />
                </div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg flex items-center justify-center">
                  <img className="w-4/5" alt="Angular" src={instagram} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-neu">Best skills in</span>
              <div className="social-icon flex gap-5">
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg flex items-center justify-center">
                  <img className="w-4/5" alt="Angular" src={angular} />
                </div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg flex items-center justify-center">
                  <img className="w-4/5" alt="Angular" src={reactlogo} />
                </div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg flex items-center justify-center">
                  <img className="w-3/5" alt="Angular" src={nodejs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-end">
        <div className="max-w-[400px] mx-auto lg:mx-0 w-5/6 aspect-ratio-11-16 linear-gradient-1 box-shadow-10 rounded-lg">
          <img src={profile} className="rounded-lg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
