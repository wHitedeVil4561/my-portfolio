import React from "react";
import angular from "../assets/img/angular.png";
import reactlogo from "../assets/img/reactlogo.svg";
import nodejs from "../assets/img/nodejs.png";
const Features = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="text-darkred">Features</div>
        <div className="text-3xl tracking-widest text-neu">What I Do</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        <div className="flex flex-col gap-5 linear-gradient-1 box-shadow-10 p-5 rounded-lg hover:linear-gradient-2 cursor-pointer">
          <div className="icon w-[60px] h-[60px]">
            <img src={angular} />
          </div>
          <div className="text-white text-xl font-semibold">
            Angular Developer
          </div>
          <div className="summary-angular text-neu">
            Extensive knowledge in developing applications is a single page
            (SPAs) using Angular framework.
            {/* Experience in working with RESTFUL
            Web Services and implementing RESTFUL API's.Experience in using ngrx
            state management */}
          </div>
          <div className=""></div>
        </div>
        <div className="flex flex-col gap-5 linear-gradient-1 box-shadow-10 p-5 rounded-lg hover:linear-gradient-2 cursor-pointer">
          <div className="icon w-[60px] h-[60px]">
            <img src={reactlogo} />
          </div>
          <div className="text-white text-xl font-semibold">
            React Developer
          </div>
          <div className="summary-angular text-neu">
            Extensive knowledge in developing applications is a single page
            (SPAs) using Angular framework.
            {/* Experience in working with RESTFUL
            Web Services and implementing RESTFUL API's.Experience in using ngrx
            state management */}
          </div>
          <div className=""></div>
        </div>
        <div className="flex flex-col gap-5 linear-gradient-1 box-shadow-10 p-5 rounded-lg hover:linear-gradient-2 cursor-pointer">
          <div className="icon w-[60px] h-[60px]">
            <img src={nodejs} />
          </div>
          <div className="text-white text-xl font-semibold">
            Backend Developer
          </div>
          <div className="summary-angular text-neu">
            Extensive knowledge in developing applications is a single page
            (SPAs) using Angular framework.
            {/* Experience in working with RESTFUL
            Web Services and implementing RESTFUL API's.Experience in using ngrx
            state management */}
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
