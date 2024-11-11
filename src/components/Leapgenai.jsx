import React from "react";
import "../index.css";
import ballImage from "../assets/ball.png";

function Leapgenai() {
  return (
    <>
      <h2 className="text-[36px] font-bold gradient-text max-md:text-[30px]" style={{visibility:"hidden"}}>
        ✦ LeapgenAi
      </h2>
      <section className="flex items-center justify-center m-[40px] px-[40px] rounded-[30px] max-md:h-fit bg-[#07020e] flex-wrap max-md:p-8 gap-[20px] max-md:m-[20px]">
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[20px] text-white font-[400]">
              Explore our Ai Products & Services
            </h2>
            <div className="flex flex-col justify-start opacity-100 flex-shrink-0 transform-none">
              <h1 className="text-[72px] font-[500] leading-[1.5em] tracking-[-2px] text-left text-gradient max-md:text-[50px]">
                Leapgen.ai
              </h1>
            </div>
            <a href="https://www.leapgen.ai/" target="_blank" rel="noreferrer">
              <button className="feature-button">Explore Now</button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center min-w-[300px]">
          <img
            alt=""
            src={ballImage}
            className="rounded-xl w-[450px] my-[30px]"
          />
        </div>
      </section>
    </>
  );
}

export default Leapgenai;
