import React from "react";
import "../index.css";
import Logo from "../assets/logo.avif";
import Hero1 from "../assets/hero_img1.avif";
import Hero2 from "../assets/hero_img2.avif";
import Hero3 from "../assets/hero_img3.avif";
import Hero4 from "../assets/hero_img4.webp";
import Hero5 from "../assets/hero_img5.avif";
import Hero6 from "../assets/hero_img6.avif";

const Hero = () => {
  const cards = [
    {
      image: Hero2, // Replace with your image URL
      title: "Customized AI Solutions for Your Needs",
    },
    {
      image: Hero6, // Replace with your image URL
      title: "Driving Efficiency with LeapGen AI",
    },
    {
      image: Hero4, // Replace with your image URL
      title: "Seamless Integration, Superior Performance",
    },
    {
      image: Hero3, // Replace with your image URL
      title: "Innovating the Future of IT Solutions",
    },
    {
      image: Hero1, // Replace with your image URL
      title: "Empowering Businesses with AI",
    },
    {
      image: Hero5, // Replace with your image URL
      title: "Transforming Professional Services with Technology",
    },
  ];

  const infiniteFeatures = [...cards, ...cards];

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#f6f7ff 0%,rgb(255,255,255) 100%)",
      }}
      className="flex items-center p-[40px] max-md:h-fit flex-wrap max-md:p-4 gap-[80px] max-md:gap-8"
    >
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col justify-start opacity-100 flex-shrink-0 transform-none">
          <h1 className="text-[50px] font-bold max-md:text-[25px]">
            Modernize your Solutions
          </h1>
          <div className="flex flex-row gap-[15px] items-center">
            <h1 className="text-[50px] font-bold max-md:text-[25px]">
              powered by
            </h1>
            <img
              className="w-[50px] h-[50px] max-md:w-[25px] max-md:h-[25px]"
              src={Logo} alt=""
            />
            <h1 className="text-[50px] font-bold max-md:text-[25px]">
              Leapgen
            </h1>
          </div>
        </div>
        <h2 className="text-base description max-md:text-[15px]">
          Leapgen has expertise in different domains like Healthcare, Federal,
          State
        </h2>
      </div>
      <div className="slider">
        <div className="slider-track gap-[10px]">
          {infiniteFeatures.map((card, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg hover:cursor-auto shadow-lg w-[360px] h-[500px] max-md:w-[200px] max-md:h-[350px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[360px] h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:bg-opacity-75">
                <div className="absolute inset-0 p-6 bg-black bg-opacity-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex">
                  <span className="text-white text-[28px] text-wrap">
                    {card.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="div_blur max-md:w-[100px] max-md:h-[350px]" />
        <div className="div_blur2 max-md:w-[100px] max-md:h-[350px]" />
      </div>
      <div className="flex flex-row items-center justify-between w-full px-4 gap-[50px] flex-wrap max-md:px-2">
        <div className="flex flex-col justify-start opacity-100 flex-shrink-0 transform-none flex-1">
          <h3 className="text-[34px] font-bold max-md:text-[25px]">
            We Helped Businesses In
          </h3>
          <div className="flex flex-row gap-[15px] items-center">
            <h3 className="text-[34px] font-bold max-md:text-[25px]">
              Generating
            </h3>
            <button className="text-[34px] font-bold gradient-text max-md:text-[25px]" >
              ✦ 2x Efficiency
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-[30px] flex-1">
          <div>
            <h3 className="text-[50px] font-bold max-md:text-[35px]">98%</h3>
            <p className="text-[18px] text-[#353535] font-[600]">
              Client Satisfaction
            </p>
          </div>
          <div>
            <h3 className="text-[50px] font-bold max-md:text-[35px]">89%</h3>
            <p className="text-[18px] text-[#353535] font-[600]">
              Revenue Increased
            </p>
          </div>
          <div>
            <h3 className="text-[50px] font-bold max-md:text-[35px]">50+</h3>
            <p className="text-[18px] text-[#353535] font-[600]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
