import React from "react";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { IoMdMailUnread } from "react-icons/io";
// import { IoLogoWhatsapp } from "react-icons/io";
const FooterCopyright = () => {
  const year = new Date().getFullYear();
// const social = [
//      {
//        lable: "Check LinkedIn",
//        icon: FaLinkedin,
//        to: "https://www.linkedin.com/in/banothsujith/",
//      },
//      {
//        lable: "Check GitHub",
//        icon: FaGithub,
//        to: "https://github.com/BanothSujith?tab=repositories",
//      },
//      {
//        lable: "Mail To User",
//        icon: IoMdMailUnread,
//        to: "mailto:banothsujith4@gmail.com",
//      },
//      {
//        lable: "WhatsApp Chat",
//        icon: IoLogoWhatsapp,
//        to: "https://wa.me/+917995037426?text=Hi, Just went through your portfolio and would like to connect with you.",
//      },
//      {
//        lable: "GitHub",
//        icon: FaGithub,
//        to: "https://www.linkedin.com/in/banothsujith/",
//      },
//    ];
  return (
    <footer className=" w-full border-[.5px] py-1 border-t-border bg-cardbg/40">
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-text/90 tracking-widest font-medium">
          © {year} All Rights Are Reserved.
        </p>
        <div >
          <p
            className="text-text/90 font-medium  tracking-widest text-sm  "
            style={{ fontFamily: "Momo Signature" }}
          >
            Banoth Sujith
          </p>
          <p className="  flex gap-2 transform translate-x-[170%] w-[40%] h-[3px]">
            <span className=" bg-text/90  py-[1px] w-full h-full rounded-[100%_30%_50%_12%] "></span>
            <span className="bg-text/90   rounded-full ">.</span>
          </p>
        </div>
        {/* {social.length > 0 && (
          <div className="flex gap-5">
            {social.map((item) => (
              <a
                key={item.icon}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                { <item.icon size={20} />}
              </a>
            ))}
          </div>
        )} */}
      </div>
    </footer>
  );
}

export default FooterCopyright;
