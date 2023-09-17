import React from "react";
import { Link } from "react-router-dom";
import xIcon from "../assets/images/xIcon.png";

const NavShow = (props) => {
  const { loading, handleLoading } = props;

  const toggleMenu = () => {
    handleLoading(!loading);
  };

  return (
    <>
      {loading === true ? (
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className={`top-0 right-0 left-0 bottom-0 h-screen fixed xl:hidden w-full z-50 `}
          style={{ zIndex: 9999 }}
        >
          <ul
            className={`w-full text-xl h-screen bg-gray-950 fixed grid grid-cols-1 justify-center items-center text-gray-100 font-medium`}
          >
            <li>
              <img
                src={xIcon}
                className="bg-[#4CB36C] rounded-full p-1 w-7 cursor-pointer absolute top-4 right-4"
                alt="xIcon"
                onClick={toggleMenu}
              />
            </li>
            <li
              onClick={() => handleLoading(true)}
              className="p-2 font-bold cursor-pointer flex justify-center items-center  hover:text-[#4CB36C] text-[#4CB36C] transition-all ease-in-out"
            >
              <a href="#home">الرئيسية</a>
            </li>
            <li
              onClick={() => handleLoading(true)}
              className="p-2 cursor-pointer hover:font-bold flex  justify-center items-center  hover:text-[#4CB36C]  transition-all ease-in-out"
            >
              <a href="#offers">العروض</a>
            </li>
            <li
              onClick={() => handleLoading(true)}
              className="p-2 cursor-pointer hover:font-bold flex  justify-center items-center hover:text-[#4CB36C]  transition-all ease-in-out"
            >
              <a href="#contactUs">تواصل معنا</a>
            </li>
            <li
              onClick={() => handleLoading(true)}
              className="p-2 cursor-pointer hover:font-bold flex  justify-center items-center  hover:text-[#4CB36C]  transition-all ease-in-out"
            >
              <Link target="_blank" to="">
                قم بزيارة موقعنا
              </Link>
            </li>
            <li
              onClick={() => handleLoading(true)}
              className="p-2 hover:font-bold flex  justify-center items-center cursor-pointer hover:text-[#4CB36C]  transition-all ease-in-out"
            >
              <Link
                to=""
                target="_blank"
                className=" cursor-pointer py-3 px-9 rounded-md border-[1px] border-solid background  border-[#4CB36C] text-white "
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default NavShow;
