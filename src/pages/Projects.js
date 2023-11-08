import React from "react";
import fleetlogo from "../assets/img/fleet.svg";
import internshiplogo from "../assets/img/Website_Content.svg";
import internshipadmin from "../assets/img/5187967.jpg";
import portfolio from "../assets/img/portfolio.png";
import navigate from "../assets/img/navigatelogo.svg";
import nectar from "../assets/img/nectarlogo.svg";
import nectarlogin from "../assets/img/hospital-signup.svg";

const ProjectCard = ({ logo, techstack, projectName, panel, background }) => {
  return (
    <div className="box-shadow-10 rounded-lg flex flex-col gap-5 p-5 cursor-pointer">
      <div className={`${background}  rounded-lg`}>
        <img
          src={logo}
          className="rounded-lg mx-auto max-h-[300px] object-cover
        "
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="">
          <span className="text-darkred">{techstack}</span>
        </div>
        <div className="text-neu flex flex-col">
          <span className=" font-semibold text-xl">{projectName}</span>
          <span className="text-base">{panel}</span>
        </div>
      </div>
    </div>
  );
};
const Projects = () => {
  const projects = [
    {
      logo: nectarlogin,
      techstack: "Angular",
      projectName: "Nectarplus Health",
      panel: "User & Admin Panel",
    },
    {
      logo: navigate,
      techstack: "Angular",
      projectName: "Navigate India",
      panel: "User & Admin Panel",
    },
    {
      logo: fleetlogo,
      techstack: "Angular",
      projectName: "Fleet Management",
      panel: "Admin Panel",
    },
    {
      logo: portfolio,
      techstack: "React",
      projectName: "My Portfolio",
      background: "bg-lightcream",
    },
    {
      logo: internshiplogo,
      techstack: "Angular",
      projectName: "Internship",
      panel: "Admin & User Panel",
      background: "bg-lightcream",
    },

    {
      logo: internshipadmin,
      techstack: "React",
      projectName: "JP Mart",
      panel: "Admin Panel",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto">
        <span className="text-3xl font-semibold text-neu">My Projects</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
