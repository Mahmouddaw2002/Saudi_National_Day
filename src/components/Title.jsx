import React from "react";

const Title = (props) => {
  return (
    <div
      className="flex justify-center items-center text-center lg:mb-20 mb-10 lg:mt-20 mt-10"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <img src={props.src} alt={props.alt} className="hover:rotate-6 transition-all ease-linear" />
    </div>
  );
};

export default Title;
