import React, { useState } from "react";
import profile from "../assets/img/profile-circle.svg";
const Navitem = ({ item, i, onChangeRoute, index }) => {
  return (
    <div
      key={i}
      className={`${
        index == i
          ? "box-shadow-10 linear-gradient-1 rounded-lg text-darkred"
          : ""
      } cursor-pointer px-5 py-3`}
      onClick={() => onChangeRoute(i)}
    >
      {item}
    </div>
  );
};
const Header = () => {
  const [index, setIndex] = useState(0);
  const route = ["About me", "Project", "Resume", "Contact"];
  const onChangeRoute = (status) => {
    console.log(status);
    setIndex(status);
  };

  return (
    <div className=" py-3 flex justify-between items-center">
      <div className="logo text-darkcream flex items-center text-2xl gap-3">
        {/* <img src={profile} /> */}
        <div className="w-20 h-20 rounded-full inner-shadow border2 border-neu"></div>
        <span>Deepak</span>
      </div>
      <div className="navbar flex gap-5 text-neu">
        {route.map((item, i) => {
          return (
            <Navitem
              item={item}
              i={i}
              onChangeRoute={onChangeRoute}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
