import { useEffect, useRef, useState } from 'react';
import IsInView from '../Hooks/IsInView.jsx';
import { AnimatePresence, motion } from "framer-motion";
import profile from "../assets/sujith.png";
const developerRoles = [
  {
    description:
      "I am a Full Stack Developer with experience in both frontend and backend development. I enjoy building efficient, scalable, and user-friendly web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    description:
      "I am a Frontend Developer passionate about creating responsive, interactive, and visually appealing web interfaces that provide great user experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"],
  },
  {
    description:
      "I am a Backend Developer specializing in building robust server-side applications, APIs, and databases to power scalable and secure web services.",
    skills: ["JavaScript","Node.js", "Express", "REST APIs", "MongoDB"],
  },
];
function About() {
  const refdes = useRef(null);
   const [ref1, isVisible, pageView] = IsInView(0.2, " 0px 0px 0px 0px ");
   const [activeIndex, setActiveIndex] = useState(0);
   const [direction, setDirection] = useState("down");
   const touchStartX = useRef(null);
   const touchEndX = useRef(null);
   
const minSwipeDistance = 10; 

const onTouchStart = (e) => {
  touchStartX.current = e.touches[0].clientX;
};

const onTouchMove = (e) => {
  touchEndX.current = e.touches[0].clientX;
};

const onTouchEnd = () => {
  if (!touchStartX.current || !touchEndX.current) return;

  const distance = touchStartX.current - touchEndX.current;

  if (Math.abs(distance) < minSwipeDistance) return;

  if (distance > 0 && activeIndex < developerRoles.length - 1) {
    setDirection("down");
    setActiveIndex((prev) => prev + 1);
  } else if (distance < 0 && activeIndex > 0) {
    setDirection("up");
    setActiveIndex((prev) => prev - 1);
  }

  touchStartX.current = null;
  touchEndX.current = null;
};

const variants = {
  initial: (direction) => ({
    y: direction === "down" ? "5%" : "-5%",
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
    
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
  exit: (direction) => ({
    y: direction === "down" ? "-5%" : "5%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "linear",
    },
  }),
};
   const scrollLock = useRef(false);

   const handleScroll = (e) => {
     if (scrollLock.current) {
      e.preventDefault()
       return;
    }

     if (e.deltaY > 0 && activeIndex < developerRoles.length - 1) {
       e.preventDefault();
       setDirection("down");
       setActiveIndex((prev) => prev + 1);
       scrollLock.current = true;
     } else if (e.deltaY < 0 && activeIndex > 0) {
       e.preventDefault();
       setDirection("up");
       setActiveIndex((prev) => prev - 1);
       scrollLock.current = true;
     }

     
     if (scrollLock.current) {
      setTimeout(() => {
         scrollLock.current = false;
       }, 300); 
       
     }
   };



   useEffect(() => {
     const container = refdes.current;
     if (!container) return;

     container.addEventListener("wheel", handleScroll);

     return () => {
       container.removeEventListener("wheel", handleScroll);
     };
   }, [activeIndex]);
    useEffect(() => {
      if (isVisible) {

      }
    }, [isVisible]);
   function handledots(i){
    if(activeIndex > i){
      setDirection("up");
      
    }else{
      setDirection("down");
    }
    setActiveIndex(i);
   }
  return (
    <div
      ref={pageView}
      id="about"
      className=" w-full  bg-surface  text-text text-center  md:pt-15 md:px-12   flex justify-between items-center flex-col gap-8 h-fit md:h-screen pb-6 md:pb-0 "
    >
      <h1
        className={`text-3xl md:text-5xl font-bold transition-all duration-700 lg:duration-1000 ease-linear ${
          isVisible
            ? "opacity-100 translate-y-0 "
            : "opacity-0  translate-y-100"
        } `}
      >
        About Me
      </h1>
      <div
        ref={(el) => {
          ref1.current = el;
          refdes.current = el;
        }}
        className="relative w-full h-full grid lg:grid-cols-2 gap-8 md:gap-0  "
      >
        <div
          className={`hidden lg:block absolute top-1/2 left-1/2 rounded-full -translate-y-1/2 w-0.5 h-[90%] bg-gradientfrom/20 transition-all duration-700  lg:duration-1000 ease-linear ${
            isVisible
              ? "opacity-100 -translate-y-0 delay-500"
              : "opacity-0  translate-y-10 "
          }`}
        ></div>
        <div className={` relative flex justify-center items-center  h-full `}>
          <div
            className={`relative rounded-full  w-[calc(70%)] transition-all duration-700 lg:duration-1000 ease-linear ${
              isVisible
                ? "opacity-100  -translate-x-0  "
                : "opacity-0  -translate-x-full "
            }`}
          >
            <img
              src={profile}
              alt="sujith"
              draggable="false"
              loading='lazy'
              className="relative bg-surface w-full  z-20 object-[10px_-20px]  aspect-square object-cover rounded-full shadow-2xl  "
            />
            <div className="absolute w-[calc(100%+12px)] h-[calc(100%+12px)] -top-[6px] -left-[6px] -z-10 rounded-full bg-gradient-to-tr from-gradientfrom via-gradientto to-gradientvia blur-md animate-pulse group-hover:scale-105 transition-transform duration-300 ease-in-out"></div>
          </div>
        </div>
        <div
          className={` text-text h-[50vh]   md:h-[35vh] lg:h-full  w-full text-center   transition-all duration-700 lg:duration-1000 ease-linear    ${
            isVisible
              ? "opacity-100 translate-x-0 "
              : "opacity-0  translate-x-full "
          } `}
        >
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className=" relative  h-full  flex flex-col py-8 justify-center gap-6 items-center  "
          >
            {
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  className="  w-[90%] flex flex-col gap-4 justify-center items-center  text-lg md:text-3xl  xl:text-4xl font-bold tracking-tight font-[Exo2]  "
                >
                  <p> {developerRoles[activeIndex]?.description}</p>
                  <div className="flex gap-4 flex-wrap items-center justify-center">
                    {developerRoles[activeIndex]?.skills?.map((item, i) => (
                      <button
                        key={i}
                        className="
                                    border border-border/10 
                                    text-lg px-3 py-1 
                                    rounded-sm font-medium tracking-wider 
                                    transition-all duration-75 ease-linear
                                    hover:shadow-md 
                                    hover:scale-105
                                  "
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            }
            <div className="flex gap-2 fixed bottom-0 md:bottom-6 lg:static   ">
              {Array.from({ length: developerRoles.length }).map((_, i) => (
                <button
                  onClick={() => handledots(i)}
                  key={i}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    activeIndex == i ? "bg-amber-300" : "bg-amber-900 "
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About