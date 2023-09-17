import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import list from "../assets/images/list.png";
import NavShow from "./NavShow";

const Navbar = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading((curr) => !curr);
  };

  return (
    <>
      <div
        id="home"
        className="relative z-50 flex justify-between items-center lg:pr-[36px] lg:pl-[50px] py-3 px-4"
      >
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="lg:hidden block" onClick={handleLoading}>
          {!loading ? (
            <img
              src={list}
              className="bg-[#4CB36C] rounded-sm w-8 cursor-pointer Fixed z-50"
              alt="list"
            />
          ) : (
            ""
          )}
          {loading ? (
            <></>
          ) : (
            // <img
            //   src={xIcon}
            //   className="bg-[#4CB36C] w-7 cursor-pointer relative z-50 flex"
            //   alt="xIcon"
            // />
            <></>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="flex text-[#242424] justify-center items-center gap-10">
            <li className="cursor-pointer text-[#4CB36C] border-b-2 border-b-[#4CB36C] transition-all ease-in-out">
              <a href="#home">الرئيسية</a>
            </li>
            <li className="cursor-pointer hover:text-[#4CB36C] hover:border-b-2 hover:border-b-[#4CB36C] transition-all ease-in-out">
              <a href="#offers">العروض</a>
            </li>
            <li className="cursor-pointer hover:text-[#4CB36C] hover:border-b-2 hover:border-b-[#4CB36C] transition-all ease-in-out">
              <a href="#contactUs">تواصل معنا</a>
            </li>
            <li className="cursor-pointer hover:text-[#4CB36C] hover:border-b-2  hover:border-b-[#4CB36C] transition-all ease-in-out">
              <Link to="https://nanoitcompany.com" target="_blank">
                قم بزيارة موقعنا
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block hover:animate-bounce ">
          <Link
            className="cursor-pointer py-[10px] px-[49px] background border border-[#4CB36C] text-white rounded-md text-center"
            to="mailto:Info@nanoitcompany.com"
            target="_blank"
          >
            تواصل معنا
          </Link>
        </div>

        <NavShow loading={loading} handleLoading={handleLoading} />
      </div>
    </>
  );
};

export default Navbar;
