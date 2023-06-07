import React from "react";

const Aboutus = () => {
  return (
    <div className="w-full flex items-center mt-20">
      <div className="w-1/2">
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

          <div className="flex justify-between gap-10 mt-10">
            <div className="flex flex-col gap-5">
              <span className="text-neu">Find with me</span>
              <div className="social-icon flex gap-5">
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-neu">Best skills in</span>
              <div className="social-icon flex gap-5">
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
                <div className="w-[60px] h-[60px] linear-gradient-1 box-shadow-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <div className="w-[400px] h-[500px] linear-gradient-1 box-shadow-10"></div>
      </div>
    </div>
  );
};

export default Aboutus;
