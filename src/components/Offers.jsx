import React from "react";
import Title from "./Title";

import title1 from "../assets/images/title1.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import trueIcon from "../assets/images/true.png";
import arrow from "../assets/images/arrow.png";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div id="offers">
      <Title src={title1} alt="title1" />

      <div className="mb-28 xl:items-center flex xl:flex-row flex-col  xl:pr-[108px] xl:pl-[98px] lg:px-20 md:px-16 px-5 gap-14 ">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="xl:w-1/2  w-full flex  justify-center items-center "
        >
          <img
            src={image1}
            alt="image1"
            className="w-full xl:w-full lg:w-1/2 flex justify-center items-center"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col lg:gap-8 gap-6 justify-start items-start"
        >
          <h2 className="text-[#333] text-2xl md:text-3xl lg:text-[40px] font-bold lg:leading-[50px]">
            عرض برمجة <br /> تطبيقات الجوال
          </h2>
          <p className="text-[#333] text-base md:text-lg lg:text-[19px] font-light leading-7 font-['Cairo']">
            هل تحلم بتطبيق جوال يعكس جمال التقنية السعودية؟ <br /> نقدم لكم
            عرضًا استثنائيًا خصم 25% لبرمجة تطبيقات الجوال <br /> لا تفوت العرض
            واطلب الخدمة الآن!
          </p>

          <div className="flex flex-col gap-y-2">
            <h3 className="lg:text-2xl md:text-xl text-xl font-extrabold leading-7 text-[#333]">
              مميزات العرض:
            </h3>
            <div className="font-['Cairo'] text-base md:text-lg lg:text-[19px] font-light !leading-10 text-[#333] pr-1">
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>تصميم مخصص وجذاب لتطبيق الجوال.</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>تطوير وبرمجة عالية الجودة.</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>تكامل مع وسائل التواصل الاجتماعي.</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>دعم مستدام وصيانة مستمرة.</p>
              </div>
            </div>
            <Link
              to="mailto:Info@nanoitcompany.com"
              target="_blank"
              className="animate-pulse lg:text-lg text-base font-normal !leading-[18px] lg:py-5 lg:px-11 px-5 py-3 rounded background flex text-white gap-4 w-fit"
            >
              <p>إعرف المزيد</p>
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
      {/* /////////////////////////// */}
      <div className="mb-28 xl:items-center flex xl:flex-row flex-col  xl:pr-[108px] xl:pl-[98px] lg:px-20 md:px-16 px-5 lg:justify-between gap-14 ">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col lg:gap-8 gap-6"
        >
          <h2 className="text-[#333] text-2xl  md:text-3xl lg:text-[40px] font-bold lg:leading-[50px]">
            عرض برمجة <br /> المواقع الإلكترونية
          </h2>
          <p className="text-[#333] text-base md:text-lg lg:text-[19px] font-light leading-7 font-['Cairo']">
            هل تحلم بموقع ويب استثنائي يمثلك على الإنترنت؟ <br /> نحن هنا لنجعل
            حلمك حقيقة. احتفالًا باليوم الوطني السعودي، <br /> نقدم لك عرض خاص
            على برمجة مواقع الويب المخصصة🌐.
          </p>

          <div className="flex flex-col gap-y-2">
            <h3 className="lg:text-2xl md:text-xl text-xl font-extrabold !leading-7 text-[#333]">
              مميزات العرض:
            </h3>
            <div className="font-['Cairo'] text-base md:text-lg lg:text-[19px] font-light !leading-10 text-[#333] pr-1">
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>تصميم مبتكر وجذاب لموقع الويب الخاص بك.</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>برمجة متقنة وسريعة.</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>كامل مع قواعد البيانات والتطبيقات الأخرى.</p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={trueIcon} alt="trueIcon" />
                <p>دعم فني ممتاز وصيانة دورية.</p>
              </div>
            </div>
            <Link
              to="mailto:Info@nanoitcompany.com"
              target="_blank"
              className="animate-pulse lg:text-lg text-base font-normal leading-[18px] lg:py-5 lg:px-11 px-5 py-3 rounded background flex text-white gap-4 w-fit"
            >
              <p>إعرف المزيد</p>
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="xl:w-1/2  w-full flex  justify-center items-center "
        >
          <img
            src={image2}
            alt="image2"
            className="w-full xl:w-full lg:w-1/2 flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
