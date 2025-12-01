import React, { useState } from "react";

import useInView from "../Hooks/IsInView.jsx";
import SocialMediaLinks from "../components/SocialMediaLinks.jsx";
import profile from "../assets/sujith.png";
function Home() {
  const Data = [
     {
       id: 1,
       description:
         "From crafting interactive UIs to building RESTful APIs and managing databases, I handle full-stack development with the MERN stack.",
     },
     {
       id: 2,
       description:
         "From crafting interactive UIs to building RESTful APIs and managing databases, I handle full-stack development with the MERN stack.",
     },
     {
       id: 3,
       description:
         "From crafting interactive UIs to building RESTful APIs and managing databases, I handle full-stack development with the MERN stack.",
     },
     {
       id: 4,
       description:
         "From crafting interactive UIs to building RESTful APIs and managing databases, I handle full-stack development with the MERN stack.",
     },
   ];
   const role = ["Front End", "Full Stack"];
   const buttons = ["Projects", "Resume"];

   const [data, setdata] = useState(Data);
   const [ref, isVisible, pageView] = useInView();
   return (
     <div
       ref={(ele) => {
         ref.current = ele;
         pageView.current = ele;
       }}
       id="home"
       className={`flex flex-col md:justify-center lg:items-center   lg:flex-row gap-20 lg:gap-4 p-4 md:px-12 pt-20 pb-12 md:py-30   w-full lg:h-screen `}
     >
       <div
         className={` flex flex-col  gap-6 md:gap-6  w-full  h-full   items-center overflow-visible  scrollbar justify-center   `}
       >
         {
           <div className="w-full flex flex-col gap-2  ">
             <div
               className={`text-text uppercase text-xs font-light font-[BitcountSingleInk] tracking-widest flex transition-all duration-500 ease-linear  ${
                 isVisible
                   ? "opacity-100 translate-x-0  lg:translate-x-0 lg:translate-y-0 delay-75"
                   : "opacity-0  -translate-x-[100%] lg:translate-x-0 lg:translate-y-[100%]  delay-0"
               }  `}
             >
               <span> Welcome to My world </span>
               <div className=" animate-pulse w-fit ">✨</div>
             </div>
             <h1
               className={` text-text flex tracking-wide w-full text-nowrap items-baseline gap-2 transition-all duration-500 ease-linear  ${
                 isVisible
                   ? "opacity-100  -translate-x-0 lg:translate-x-0 lg:translate-y-0 delay-100"
                   : "opacity-0 -translate-x-[100%] lg:translate-x-0 lg:translate-y-[100%] delay-0"
               }  `}
             >
               <span className="text-[clamp(2rem,10vw,4rem)] font-bold font-[LibreBaskerville] ">
                 Hi
                 <span className="text-[clamp(2rem,10vw,4rem)] font-bold font-[LibreBaskerville]  ">
                   ,
                 </span>
               </span>
               <span className=" font-medium md:text-[clamp(2rem,2vw,6rem)] ">
                 I'm
               </span>
               <span className="name bg-gradient-to-r from-[#420101] to-[#970303]  bg-clip-text text-transparent  animate-bgmove  ">
                 <span className=" font-bold text-2xl md:text-[clamp(2rem,2vw,6rem)] pr-2 ">
                   Banoth
                 </span>
                 <span className="font-bold text-2xl md:text-[clamp(2rem,2vw,6rem)] ">
                   Sujith
                 </span>
               </span>
             </h1>
             <h1
               className={` flex gap-4  transition-all duration-500 ease-linear delay-150 ${
                 isVisible
                   ? "opacity-100 -translate-x-0 lg:translate-x-0 lg:translate-y-0"
                   : "opacity-0  -translate-x-[100%] lg:translate-x-0 lg:translate-y-[100%] "
               } `}
             >
               <span className="transition-all  flex gap-2 capitalize text-[clamp(2rem,6vw,5rem)] font-[PlayfairDisplay] text-nowrap bg-gradient-to-r from-gradientfrom to-gradientto bg-clip-text text-transparent relative  ">
                 <span>{role[1].split(" ")[0]}</span>
                 <span>{role[1].split(" ")[1]}</span>
               </span>
               <span className="text-text capitalize text-[clamp(2rem,6vw,5rem)] font-[PlayfairDisplay] text-nowrap">
                 Developer
               </span>
             </h1>
             <p
               className={`lg:w-[90%] w-[80%] md:w-3/4 text-text  text-[clamp(1rem,1.5vw,3rem)] transition-all duration-500 ease-linear delay-200 ${
                 isVisible
                   ? "opacity-100 -translate-x-0 lg:translate-x-0 lg:translate-y-0"
                   : "opacity-0  -translate-x-[100%] lg:translate-x-0 lg:translate-y-[100%] "
               }  `}
             >
               {data[0]?.description}
             </p>
           </div>
         }
         <div
           className={`flex gap-6 md:gap-16 md:px-12 justify-around md:justify-start  w-full  transition-all duration-500 ease-linear delay-500 ${
             isVisible
               ? "opacity-100  translate-x-0  "
               : "opacity-0  -translate-x-[100%]   "
           } `}
         >
           {buttons.map((btn, i) => (
             <button
               onClick={() => hanldleClick("Resume")}
               key={i}
               className="group grow-1 md:grow-0  shrink-0 text-border  hover:animate-buttonanimi rounded-xl px-4 py-1 md:px-[4%] md:py-[1%]   overflow-hidden  font-medium  relative z-10  md:text-xl cursor-pointer bg-btnbg"
             >
               <span className="absolute top-0 left-0 bg-btnhoverbg opacity-70 w-full h-full rotate-45 -translate-x-[calc(70%)] group-hover:-translate-x-0 group-hover:rotate-0 transition-all duration-500 ease-linear group-active:bg-gray-800"></span>
               <span className="relative z-10">{btn}</span>
             </button>
           ))}
         </div>

         <SocialMediaLinks isVisible={isVisible} />
       </div>

       <div
         className={`relative flex justify-center p-1 lg:w-3/4 h-full opacity-100 scale-100 animate-float transition-all duration-1000 ease-linear ${
           isVisible
             ? "opacity-100 translate-x-0"
             : "opacity-0 translate-x-[100%] "
         } `}
       >
         <div className="relative rounded-full bg-surface group">
           <img
             src={profile}
             alt="sujith"
             draggable="false"
             className="relative z-20 object-[10px_-20px] h-full aspect-square object-cover rounded-full shadow-2xl  "
           />
           <div className="absolute w-[calc(100%+12px)] h-[calc(100%+12px)] -top-[6px] -left-[6px] -z-10 rounded-full bg-gradient-to-tr from-gradientfrom via-gradientto to-gradientvia blur-md animate-pulse group-hover:scale-105 transition-transform duration-300 ease-in-out"></div>
           <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-[0.75rem] md:text-sm px-4 py-1 rounded-full shadow-md animate-float ring-1 ring-white/10 backdrop-blur-md">
             🚀 Full Stack
           </span>
           <span className="absolute top-1/2 -left-0  md:-left-14 -translate-y-1/2 bg-gradient-to-r from-cyan-600 to-sky-500 text-white text-[0.75rem] md:text-sm px-4 py-1 rounded-full shadow-md animate-float-delay ring-1 ring-white/10 backdrop-blur-md">
             🎨 Front End
           </span>
           <span className="absolute top-1/2 -right-0 md:-right-14 md:-translate-y-1/2 bg-gradient-to-r from-green-600 to-emerald-400 text-white text-[0.75rem] md:text-sm px-4 py-1 rounded-full shadow-md animate-float-reverse ring-1 ring-white/10 backdrop-blur-md">
             🔧 Back End
           </span>
           <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white text-[0.75rem] md:text-sm px-4 py-1 rounded-full shadow-md animate-float ring-1 ring-white/10 backdrop-blur-md">
             ⚙️ MERN
           </span>
         </div>
       </div>
     </div>
   );
}

export default React.memo(Home);
