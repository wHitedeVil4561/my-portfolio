import React, { useState } from "react";
import profile from "../assets/img/2018041054.jpg";
const Navitem = ({ item, i, onChangeRoute, index }) => {
  return (
    <div
      key={i}
      className={`${
        index == i
          ? "box-shadow-10 linear-gradient-1 rounded-lg text-darkred"
          : ""
      } cursor-pointer px-5 py-3`}
      onClick={() => onChangeRoute(i)}>
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
    <div className="px-4 py-3 flex justify-between items-center">
      <div className="logo text-darkcream flex items-center text-2xl gap-3">
        {/* <img src={profile} /> */}
        <div className="w-20 h-20 rounded-full shadow-inner shadow-neu border2 border-neu flex justify-center items-center">
          <img src={profile} alt="Profile pic" className="rounded-full w-5/6" />
        </div>
        <span>Deepak Kumar Gupta</span>
      </div>
      <div className="navbar hidden lg:flex gap-5 text-neu ">
        {route.map((item, i) => {
          return (
            <Navitem
              key={i}
              item={item}
              i={i}
              onChangeRoute={onChangeRoute}
              index={index}
            />
          );
        })}
      </div>
      <div className="toggleIcon cursor-pointer lg:hidden">
        <svg
          id="mobile-toggle"
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="33"
          viewBox="0 0 61 33">
          <g
            id="Group_70651"
            data-name="Group 70651"
            transform="translate(-939 -60)">
            <rect
              id="Rectangle_7616"
              data-name="Rectangle 7616"
              width="55"
              height="7"
              rx="3.5"
              transform="translate(945 60)"
              fill="#f2494f"></rect>
            <rect
              id="Rectangle_7618"
              data-name="Rectangle 7618"
              width="47"
              height="7"
              rx="3.5"
              transform="translate(953 86)"
              fill="#f2494f"></rect>
            <rect
              id="Rectangle_7617"
              data-name="Rectangle 7617"
              width="61"
              height="7"
              rx="3.5"
              transform="translate(939 73)"
              fill="#f2494f"></rect>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
