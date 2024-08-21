import React from "react";
import "../index.css";
import Carousel from "./Carousel";

function CoreComponents() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,rgb(225,228,247) 100%)",
      }}
      className="flex flex-col items-center py-[80px] max-md:p-[40px]"
    >
      <h2 className="text-[36px] font-bold gradient-text max-md:text-[30px]">
        ✦ Core Competencies
      </h2>
      <p className="text-[#252525] text-[16px] font-[500] mt-[20px] text-center mb-[30px] w-[70%] max-md:text-[14px]">
        Within LeapGen Solutions' Core Competencies, we encapsulate the
        essential strengths and cutting-edge expertise that define our
        excellence in the AI industry. Here we spotlight the technological
        prowess and innovative strategies that empower our clients to lead their
        markets.
      </p>
      <Carousel />
    </div>
  );
}

export default CoreComponents;
