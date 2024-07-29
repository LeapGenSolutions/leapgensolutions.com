import React, { useState } from "react";
import CoreComp1 from "../assets/corecomponents/corecomp1.avif";
import CoreComp2 from "../assets/corecomponents/corecomp2.avif";
import CoreComp3 from "../assets/corecomponents/corecomp3.avif";
import CoreComp4 from "../assets/corecomponents/corecomp4.avif";
import CoreComp5 from "../assets/corecomponents/corecomp5.avif";
import "../index.css";
import Carousel from "./Carousel";

function CoreComponents() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,rgb(225,228,247) 100%)",
      }}
      className="flex flex-col items-center py-[80px]"
    >
      <h2 className="text-[36px] font-bold gradient-text">
        ✦ Core Competencies
      </h2>
      <p className="text-[#252525] text-[16px] font-[500] mt-[20px] text-center mb-[30px]">
        Within LeapGen Solutions' Core Competencies, we encapsulate the
        essential
        <br /> strengths and cutting-edge expertise that define our excellence
        in the AI industry.
        <br /> Here we spotlight the technological prowess and innovative
        strategies that
        <br /> empower our clients to lead their markets.
      </p>
      <Carousel />
    </div>
  );
}

export default CoreComponents;
