import React from "react";
import "../index.css";
import PublicServicesImg from "../assets/public_services.avif";
import Button from "./Button";

function PublicServices() {
  return (
    <div className="relative px-[120px] py-[100px]">
      <img
        className="w-[600px] h-[500px] rounded-[30px]"
        src={PublicServicesImg}  alt=""
      />
      <div className="absolute top-0 bottom-0 right-[120px] flex items-center justify-center w-[645px]">
        <div className="public_services_box">
          <h2 className="text-[32px] font-bold gradient-text">
            Revolutionize Public Services
          </h2>
          <h3 className="text-[#333333] text-[20px] font-[700]">
            with Cutting-Edge IT Solutions
          </h3>
          <p className="text-[#252525] text-[16px] font-[500]">
            LeapGen Solutions delivers advanced, secure, and compliant IT
            innovations tailored for government and public sector needs.
            Streamline operations, enhance citizen engagement, and drive
            efficiency with our bespoke technology services.
          </p>
          <Button text="Explore Now" />
        </div>
      </div>
    </div>
  );
}

export default PublicServices;
