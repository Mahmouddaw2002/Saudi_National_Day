import React from "react";
import title from "../assets/images/title.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerComponent w-full h-screen bg-repeat lg:pt-20 pt-20 lg:px-10 px-3">
        <div className="overlay-image sm:hidden"></div>
        <div className="relative flex flex-wrap lg:flex-row flex-col justify-between opacity-100 gap-10 z-30">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="flex flex-col flex-wrap gap-9"
          >
            <h1 className="sm:text-[#242424] text-[#63dc89] text-2xl md:text-4xl leading-10 lg:text-[56px] font-bold lg:leading-[72px] shadowHeader">
              من نانو آي تي إلى
              <br /> السعودية تكنولوجيا <br />
              مبتكرة لمشاريع ناجحة
            </h1>
            <p className="sm:text-[#242424] text-[#52ba73]  shadowP font-bold text-sm lg:text-base font-['Cairo'] leading-6">
              بمناسبة اليوم الوطني السعودي احصل على خصم خاص على خدماتنا في برمجة
              تطبيقات <br />
              الجوال وبرمجة مواقع الكترونية. فقط في هذا اليوم، استفد من الخصومات
              الضخمة.
            </p>
            <Link
              to="mailto:Info@nanoitcompany.com"
              target="_blank"
              className="hover:animate-bounce background rounded-md font-['Cairo'] text-center py-1 lg:w-[70%] sm:w-[70%] md:py-2 md:w-2/4 w-full px-[21px] lg:py-2 text-xs sm:text-sm lg:text-base font-normal leading-[48px] text-white"
            >
              استقبل اليوم الوطني السعودي مع عروضنا الخاصة!
            </Link>
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className=" flex justify-center items-center relative"
          >
            <img src={title} alt="title" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
