import React from "react";
import ArrowIcon from "../assets/partners/down_arrow.png";
import GreenLineIcon from "../assets/partners/green_line.svg";
import GreenLine2Icon from "../assets/partners/green_line2.png";
import JointSolutuons from "../assets/partners/joint_solutions.jpg";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ServiceNowIMG from "../assets/partners/servicenow_inner.jpg";
import MicrosoftIMG from "../assets/partners/microsoft_inner.jpg";
import AwsIMG from "../assets/partners/aws_inner.jpg";

function LearnMorePage() {
  const { id } = useParams();

  const slides = [
    {
      id: 1,
      title: "Enhancing Service Excellence with DMI & ServiceNow",
      image: ServiceNowIMG,
      description:
        "Transforming Industries with Innovative Service Management Solutions Tailored for Success. Leverage DMI's deep integration with ServiceNow to revolutionize your service management across all business areas. Our partnership ensures tailored solutions that streamline processes and elevate operational efficiency to new heights.",
      points: [
        {
          name: "10+ years",
          desc: "Expertise in ServiceNow solutions and client success.",
        },
        {
          name: "4.2M+",
          desc: "Devices under DMI management.",
        },
        {
          name: "100%",
          desc: "Project success rate with ServiceNow deployments.",
        },
        {
          name: "10+",
          desc: "Successful comprehensive ServiceNow implementations.",
        },
        {
          name: "100+",
          desc: "Customized applications developed using ServiceNow for enhanced workflows.",
        },
      ],
      joint_solutions: `Leveraging our deep expertise with ServiceNow, DMI crafts strategic solutions that revolutionize enterprise service management and operational agility. Our joint offerings with ServiceNow are designed to meet the demands of today’s digital ecosystems. These solutions provide scalable, secure, and innovative approaches that enhance business processes and drive strategic outcomes. Our collaborative efforts ensure that each ServiceNow solution is tailored to address the unique challenges faced by modern enterprises. We focus on delivering value through cutting-edge technology that facilitates seamless service experiences and robust operational workflows.Explore our comprehensive suite of ServiceNow offerings below. Each solution is crafted to optimize efficiency, improve service delivery, and empower your organization to achieve its strategic goals. With DMI and ServiceNow, you can trust that your enterprise will benefit from the latest advancements in service management and operational excellence.`,
      path: "servicenow",
    },
    {
      id: 2,
      title: "Driving Digital Excellence with DMI & Microsoft",
      image: MicrosoftIMG,
      description:
        "Transforming Industries with Innovative Microsoft Solutions Tailored for Success. DMI leverages Microsoft's cutting-edge solutions to transform businesses, driving innovation and efficiency. Together, we deliver customized digital experiences that redefine industry standards and achieve exceptional results.",
      points: [
        {
          name: "500+",
          desc: "Microsoft certifications held by our team",
        },
        {
          name: "100+",
          desc: "Azure-based mobile and cloud-native apps developed",
        },
        {
          name: "200%",
          desc: "increase in Art Basel's page views with Microsoft Azure",
        },
        {
          name: "2000+",
          desc: "user stories managed annually with Microsoft Dynamics",
        },
        {
          name: "99.9%",
          desc: "uptime for critical systems, surpassing the 99.5% target",
        },
      ],
      joint_solutions: `At DMI, we leverage the comprehensive capabilities of Microsoft technologies to empower your digital transformation journey. Our partnership with Microsoft enables us to offer a diverse range of solutions from strategic cloud adoption to complete digital overhaul, all designed to meet the critical needs of modern businesses in a rapidly evolving digital world. Below, explore our curated suite of Microsoft solutions that are structured to enhance your operational efficiency, fortify your data security, and accelerate your business growth with pioneering technology.`,
      path: "microsoft",
    },
    {
      id: 3,
      title: "Pioneering AWS Cloud Solutions",
      image: AwsIMG,
      description:
        "Empower your enterprise with DMI’s expert-driven AWS transformations. Explore how our partnership with Amazon Web Services (AWS) delivers cutting-edge, scalable solutions designed to transform your digital landscape and propel your business forward.",
      points: [
        {
          name: "150+",
          desc: "AWS-certified professionals driving cloud innovation.",
        },
        {
          name: "200k+",
          desc: "annual savings for a global insurer via AWS.",
        },
        {
          name: "4.2M+",
          desc: "devices managed in mobile ecosystems.",
        },
        {
          name: "85%",
          desc: "repeat business rate showcasing client trust.",
        },
        {
          name: "95%",
          desc: "cost reduction for a global insurer's portal.",
        },
      ],
      joint_solutions: `At DMI, we leverage the power of AWS to drive a spectrum of tailored cloud solutions that enhance innovation, efficiency, and growth for our clients. From strategic insights that align technology investments with your business goals to transformative cloud modernization and migration, we ensure that our solutions integrate seamlessly with your strategic objectives. Our suite of services includes everything from strategic cloud advisory to full-scale digital transformation, designed to meet the unique needs of businesses navigating today’s dynamic technological landscape. Explore our offerings below to see how we can help you optimize operations, secure data, and propel your enterprise into a new era of digital excellence with AWS.`,
      path: "aws",
    },
  ];

  return (
    <>
      <Header from="details" />

      <div className="bg-gray-900 text-white font-sans">
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, #0e1629 100%), url(${
              slides.filter((data) => data.path === id)[0].image
            })`,
          }}
        >
          {/* Header Section */}
          <header className="pt-[120px] pb-[72px] px-[30px] bg-cover bg-center w-1/2 max-md:w-full">
            <h1 className="text-[100px] leading-[0.9] text-left font-bold uppercase mb-2 max-md:text-[45px]">
              {slides.filter((data) => data.path === id)[0].title}
            </h1>
            <p className="text-lg mb-12 mt-[40px]">
              {slides.filter((data) => data.path === id)[0].description}
            </p>
          </header>

          <img src={ArrowIcon} alt="Arrow Icon" className="mx-auto mb-4" />
          <img src={GreenLineIcon} alt="Arrow Icon" className="mx-auto mb-4" />

          <div className="flex flex-row flex-wrap gap-[20px] items-center py-[72px] px-[30px]">
            {slides
              .filter((data) => data.path === id)[0]
              .points.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundImage: `url('https://dminc.com/wp-content/uploads/2024/07/GRID_4_Seamless_1.png')`,
                    }}
                    className="flex flex-col items-center justify-center text-center flex-1 self-stretch px-[30px] py-[40px] bg-[#004b85]"
                  >
                    <h3 className="font-bold mb-2 text-[48px]">{item.name}</h3>
                    <div className="h-[3px] w-[80px] bg-[#11cc6e]" />
                    <p className="text-[18px] mt-4">{item.desc}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <img src={GreenLine2Icon} alt="Arrow Icon" className="mx-auto mb-4" />

        <section className="bg-[#0e1629] text-white py-16 px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <div>
              <h2 className="text-[94px] leading-[0.9] text-left font-bold uppercase mb-2 max-md:text-[40px]">
                Joint Solutions
              </h2>
              <p className="text-lg leading-relaxed mt-12">
                {slides.filter((data) => data.path === id)[0].joint_solutions}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={JointSolutuons}
                alt="Joint Solutions"
                className="rounded-md w-full h-auto lg:max-w-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LearnMorePage;
