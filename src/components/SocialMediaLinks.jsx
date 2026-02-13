import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
function hanldleClick(btn) {
        //  console.log(btn);
if (btn === "Resume"){
  window.location.href = "../../src/Resume/Sujith_Resume.pdf";
}
  if (btn?.to) {
    window.location.href = btn.to;
  }
  }
const social = [
     {
       lable: "Check LinkedIn",
       icon: FaLinkedin,
       to: "https://www.linkedin.com/in/banothsujith/",
     },
     {
       lable: "Check GitHub",
       icon: FaGithub,
       to: "https://github.com/BanothSujith?tab=repositories",
     },
     {
       lable: "Mail To User",
       icon: IoMdMailUnread,
       to: "mailto:banothsujith4@gmail.com",
     },
     {
       lable: "WhatsApp Chat",
       icon: IoLogoWhatsapp,
       to: "https://wa.me/+917995037426?text=Hi, Just went through your portfolio and would like to connect with you.",
     },
   ];
function SocialMediaLinks({isVisible = false, page="home"}) {
  return (
    <div
      className={`flex gap-4 md:gap-6 py-2 justify-center md:justify-start ${page == "home"? 'md:pl-12':''} w-full transition-all duration-500 ease-linear    ${
        isVisible ? `opacity-100  delay-1000 ` : "opacity-0  delay-0 "
      }  `}
    >
      {social.map((btn, i) => {
        const Icon = btn.icon;

        return (
          <button
            key={i}
            className={`socialtest group  shadow-[2px_-2px_5px] shadow-border bg-surface 
           hover:animate-buttonanimi  px-2 py-2 overflow-hidden  font-medium relative w-[clamp(2.5rem,2vw,6rem)] h-[clamp(2.5rem,2vw,6vw)]  rounded-full cursor-pointer transition-all duration-100 ease-linear  ${
             isVisible
               ? "opacity-100  translate-x-0 delay-700"
               : "opacity-0  -translate-x-[100%] delay-700 "
           }  `}
            onClick={() => hanldleClick(btn)}
          >
            <span
              className={`absolute top-0 left-0 ${"bg-[#970303]"} rounded-full   w-full h-full  -translate-y-[calc(85%)] group-hover:-translate-y-0 group-active:-translate-y-0 lg:group-active:none transition-all duration-75 lg:duration-200 ease-linear`}
            ></span>
            <Icon
              className={`relative w-full h-full ${"text-text"}   group-active:text-white group-active:opacity-100  group-active:animate-shake group-hover:text-white group-hover:opacity-100  group-hover:animate-shake `}
              title={btn?.lable}
            />
          </button>
        );
      })}
    </div>
  );
}

export default SocialMediaLinks