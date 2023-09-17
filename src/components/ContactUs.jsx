import React, { useRef, useState } from "react";
import Title from "./Title";
import title2 from "../assets/images/title2.png";

import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import snap from "../assets/images/snap.png";

import user from "../assets/images/user.png";
import email from "../assets/images/email.png";
import message from "../assets/images/message.png";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [ele, setEle] = useState(false);

  const refName = useRef("");
  const refEmail = useRef("");
  const refMessage = useRef("");

  const handleForm = (e) => {
    e.preventDefault();

    const valueName = refName.current.value;
    const valueEmail = refEmail.current.value;
    const valueMessage = refMessage.current.value;

    if (
      valueName.length >= 1 &&
      valueEmail.length >= 1 &&
      valueMessage.length >= 1
    ) {
      setEle(true);
      refName.current.value = "";
      refEmail.current.value = "";
      refMessage.current.value = "";
    } else {
      setEle(false);
    }
  };

  return (
    <div className="lg:px-[70px]  px-5 mb-40" id="contactUs">
      <Title src={title2} alt="title2" />

      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className=" flex flex-wrap lg:flex-row xl:justify-around justify-start items-start gap-10 xl:gap-1"
      >
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-bold leading-[60px] text-[#242424]">
            نسعد بمشاركتك
          </h2>
          <p className="text-[#7A7A7A] text-base font-medium leading-7">
            جاهزون لخدمتك في كل وقت، آراؤك تسهم في تقدمنا المستمر.
          </p>

          <div className="flex flex-wrap gap-8 lg:gap-20 mt-14">
            <div className="flex flex-col gap-y-8">
              {/* /////////////////////////////////// */}
              <Link
                target="_blank"
                to="https://www.facebook.com/Nano.IT.Company"
                className="hover:animate-pulse flex flex-row gap-4"
              >
                <div>
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold leading-[60px]">فيسبوك</h3>
                  <p className="text-[#797979]  text-[13px]  font-medium ">
                    Facebook@
                  </p>
                </div>
              </Link>
              {/* /////////////////////////////////// */}
              <Link
                target="_blank"
                to="https://www.instagram.com/nanoitcompany/"
                className="hover:animate-pulse flex flex-row gap-4"
              >
                <div>
                  <img src={instagram} alt="instagram" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold leading-[60px]">
                    إنستجرام
                  </h3>
                  <p className="text-[#797979]  text-[13px]  font-medium ">
                    Instagram@
                  </p>
                </div>
              </Link>
            </div>
            {/* /////////////////////////////////// */}
            <div className="flex flex-col gap-y-8">
              <Link
                target="_blank"
                to="https://twitter.com/NanoITCompany"
                className="hover:animate-pulse flex flex-row gap-4"
              >
                <div>
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold leading-[60px]">تويتر</h3>
                  <p className="text-[#797979]  text-[13px]  font-medium ">
                    Twitter@
                  </p>
                </div>
              </Link>
              {/* /////////////////////////////////// */}
              {/* <Link
                target="_blank"
                to=""
                className="hover:animate-pulse flex flex-row gap-4"
              >
                <div>
                  <img src={snap} alt="snap" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold leading-[60px]">
                    سناب شات
                  </h3>
                  <p className="text-[#797979]  text-[13px] font-medium ">
                    Snapchat@
                  </p>
                </div>
              </Link> */}
            </div>
            {/* /////////////////////////////////// */}
          </div>
        </div>
        <form
          onSubmit={handleForm}
          data-aos="zoom-in"
          data-aos-duration="500"
          className="w-full xl:w-auto transition delay-150 duration-300 ease-in-out"
        >
          <div className=" flex flex-wrap flex-col gap-y-5 px-8 pt-10 pb-10 xl:w-[472px] w-full rounded-lg shadowContactUs border">
            <div className="borderContactUs flex lg:p-5 py-5">
              <img src={user} className="pl-2" alt="user" />
              <input
                ref={refName}
                type="text"
                placeholder="الإسم"
                className=" color w-full outline-none border-none"
                name=""
                id=""
              />
            </div>
            <div className="borderContactUs flex lg:p-5 py-5">
              <img src={email} className="pl-2" alt="email" />
              <input
                ref={refEmail}
                type="text"
                placeholder="الإيميل"
                className="color w-full outline-none border-none"
                name=""
                id=""
              />
            </div>
            <div className="borderContactUs flex lg:p-5 py-5 items-start justify-start">
              <img src={message} className="pl-2" alt="message" />
              <textarea
                ref={refMessage}
                type="text"
                placeholder="الرسالة"
                name=""
                id=""
                className="resize-none color w-full h-28 outline-none border-none"
              ></textarea>
            </div>
            <button className="hover:animate-pulse px-7 w-full font-medium text-[13px] py-3 background text-white">
              إرسال الرسالة
            </button>
            {ele && <p className="text-xs color">تم إرسال الرسالة بنجاح ...</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
