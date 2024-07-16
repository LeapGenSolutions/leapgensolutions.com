import React from "react";
import Logo from "../assets/logo_full.png";

function Footer({ handleMenuClick }) {
  return (
    <footer className="bg-[#FBFBFB] text-white px-[95px] pt-[80px] pb-[40px] border-t-[0.2px] border-t-[rgb(251, 251, 251)] flex flex-col gap-[50px] max-md:p-[30px]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-[25px]">
        <img className="w-[286px] h-[48px] mr-[1rem]" src={Logo} />

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-[40px] flex-wrap">
            <li onClick={() => handleMenuClick("hero")}>
              <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                Home
              </button>
            </li>
            <li onClick={() => handleMenuClick("about")}>
              <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                Leapgen.ai
              </button>
            </li>
            <li onClick={() => handleMenuClick("features")}>
              <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                Values
              </button>
            </li>
            <li onClick={() => handleMenuClick("domains")}>
              <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                Competencies
              </button>
            </li>
            <li onClick={() => handleMenuClick("services")}>
              <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                Solutions
              </button>
            </li>
            <li onClick={() => handleMenuClick("services")}>
              <button className="text-[#666666] hover:text-[#0088ff] font-medium text-[15px] cursor-pointer">
                Stories
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto mt-4 text-sm text-gray-400 flex justify-between items-center border-t-[0.2px] border-t-[rgb(251, 251, 251)] pt-[20px] max-md:flex-col max-md:items-start max-md:gap-[20px]">
        <p className="text-[#1C1C1C]">
          © Leapgen Solutions. 2024. All rights reserved. Privacy Policy.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
