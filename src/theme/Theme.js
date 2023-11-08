import React from "react";
import Header from "./Header";
import Aboutus from "../pages/Aboutus";
import Features from "../pages/Features";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const Theme = () => {
  return (
    <div className="w-full mx-auto pb-10">
      <div className="container mx-auto ">
        <Header />
      </div>
      <div className="container px-4 flex flex-col gap-10 mx-auto">
        <Aboutus />
        <div className="h-[2px] bg-darkblack"></div>
        <Features />
        <div className="h-[2px] bg-darkblack"></div>
        <Resume />
        <div className="h-[2px] bg-darkblack"></div>
        <Projects />
        <div className="h-[2px] bg-darkblack"></div>
        <Contact />
      </div>
    </div>
  );
};

export default Theme;
