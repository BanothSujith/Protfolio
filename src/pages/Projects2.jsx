

import IsInView from "../Hooks/IsInView.jsx";
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import project from "../assets/Projects.png";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A fully responsive developer portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth scroll animations, dark/light mode, and project showcase sections with intersection observer effects.",
    link: "#",
    skills: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Responsive Design",
    ],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Store",
    desc: "A full-featured MERN stack e-commerce application. Includes authentication, product management dashboard, Stripe payment integration, order history tracking, and real-time inventory management.",
    link: "#",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Stripe API",
      "JWT",
      "Redux",
    ],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 3,
    title: "Chat App",
    desc: "A real-time chat platform powered by React, Node.js, Socket.io, and MongoDB. Supports live messaging, typing indicators, user presence, and secure private chat rooms with JWT authentication.",
    link: "#",
    skills: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "WebSockets"],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 4,
    title: "Weather App",
    desc: "A clean and modern weather dashboard using the OpenWeather API. Displays real-time forecasts, temperature trends, and animated weather icons, with geolocation and search functionality.",
    link: "#",
    skills: [
      "React",
      "OpenWeather API",
      "CSS3",
      "JavaScript",
      "Geolocation API",
    ],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 5,
    title: "Task Manager",
    desc: "A productivity tool featuring Kanban-style task boards with drag-and-drop functionality. Built with React DnD and Zustand for state management, and supports task deadlines, filters, and progress tracking.",
    link: "#",
    skills: ["React", "Zustand", "React DnD", "CSS", "JavaScript", "Kanban UI"],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 6,
    title: "Blog CMS",
    desc: "A custom content management system built with Next.js and Firebase. Allows markdown-based posts, image uploads, admin authentication, SEO optimization, and a rich-text editor for content creation.",
    link: "#",
    skills: ["Next.js", "Firebase", "Markdown", "SEO", "React", "Tailwind CSS"],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 7,
    title: "3D Portfolio",
    desc: "An interactive 3D portfolio experience built using Three.js and React Three Fiber. Users can explore a 3D scene with animated models, dynamic lighting, and camera transitions synced to scroll position.",
    link: "#",
    skills: [
      "Three.js",
      "React Three Fiber",
      "JavaScript",
      "3D Animation",
      "GLTF Models",
    ],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 8,
    title: "Finance Tracker",
    desc: "A personal finance dashboard built with React and Chart.js. Tracks expenses, income, and savings goals with visual analytics and localStorage persistence for seamless user experience.",
    link: "#",
    skills: ["React", "Chart.js", "JavaScript", "CSS", "LocalStorage"],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 9,
    title: "Movie Finder",
    desc: "A sleek web app using the TMDB API to search, filter, and discover movies. Includes infinite scrolling, trailer previews, watchlist feature, and dynamic background gradients based on movie genres.",
    link: "#",
    skills: ["React", "TMDB API", "JavaScript", "CSS", "REST API"],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
  {
    id: 10,
    title: "AI Chatbot",
    desc: "An intelligent chatbot powered by OpenAI’s GPT API. Designed with a minimalist chat UI, it can answer questions, summarize text, and perform context-aware responses with conversation memory.",
    link: "#",
    skills: [
      "React",
      "OpenAI API",
      "Node.js",
      "Express",
      "Chat UI",
      "JavaScript",
    ],
    projectLinks: [
      { type: "GitHub", url: "#", label: FaGithub },
      { type: "Visit Site", url: "#", label: IoArrowForwardCircle, size: 24 },
    ],
  },
];
function Projects2() {

 const [ref, isVisible, pageView] = IsInView(0.2, " 0px 0px 0px 0px "); 
 const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("down");
    const refdes = useRef(null);
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
 
   if (distance > 0 && activeIndex < projectsData.length - 1) {
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
 
      if (e.deltaY > 0 && activeIndex < projectsData.length - 1) {
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
      ref={(ele) => {
        ref.current = ele;
        pageView.current = ele;
      }}
      id="projects"
      className="h-fit md:h-screen w-full text-text flex flex-col justify-center items-center gap-6 lg:gap-12 lg:pt-18 overflow-hidden "
    >
      <h1
        className={`text-3xl md:text-5xl font-bold transition-all duration-700 lg:duration- ease-linear md:hidden lg:block ${
          isVisible
            ? "opacity-100 translate-y-0 "
            : "opacity-0  translate-y-100"
        } `}
      >
        Projects
      </h1>
      <div className="flex justify-center flex-col lg:flex-row items-center  h-full lg:px-6 w-full ">
        <div className="h-full w-full  lg:hidden block ">
          <img
            src={project}
            className="h-[40vh] md:h-[50vh] w-full lg:hidden object-bottom "
          />
        </div>

        <div
          ref={refdes}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className=" relative   h-fit   grid items-center lg:bg-cardbg/40 w-full   lg:overflow-hidden "
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className="h-[60vh] md:[0vh] lg:[60vh]  p-4 lg:p-12 flex justify-center  lg:justify-center items-center flex-col lg:w-1/2 gap-4  md:gap-8 "
            >
              <h2 className=" text-3xl md:text-4xl font-bold md:mb-2 ">
                {projectsData[activeIndex].title}
              </h2>
              <p className="text-text/70  md:text-xl md:mx-2 text-center md:w-3/4 tracking-wide md:leading-relaxed ">
                {projectsData[activeIndex].desc}
              </p>
              <div className=" flex flex-wrap justify-center gap-x-4 gap-y-3 px-2  font-medium tracking-wide text-text   ">
                {projectsData[activeIndex]?.skills?.map((skill, idx) => (
                  <div
                    key={idx}
                    className=" border border-amber-500/50 bg-amber-500/10 text-sm px-3 py-1 rounded-full font-medium transition-all duration-300 ease-linear   "
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex gap-16 w-full justify-center mt-6 md:mt-12 ">
                {projectsData[activeIndex]?.projectLinks?.map((Links, idx) => {
                  const Type = Links?.label;
                  return (
                    <button
                      key={idx}
                      className={`border border-amber-500/50 bg-amber-500/10  md:px-3 h-12 rounded-xl font-medium transition-all duration-300 ease-linear hover:text-text/80 hover:bg-surface/60 hover:border-amber-400/70 w-1/2 md:w-1/4 flex justify-center md:gap-4 items-center  group`}
                    >
                      <Type
                        className={`${
                          Links?.size ? "text-4xl" : "text-3xl"
                        } group-active:translate-x-full `}
                      />
                      <span className="ml-2">{Links?.type}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* //scjklasn */}
          <div
            className="absolute w-full  lg:w-3 h-2 lg:h-full  left-0 lg:left-[calc(50%)]
top-0 flex lg:flex-col gap-[2px] items-center  "
          >
            {Array.from({ length: projectsData.length }).map((_, i) => (
              <button
                onClick={() => handledots(i)}
                key={i}
                className={`h-1 lg:h-1/12 rounded-full hover:h-4 lg:hover:w-2 w-full lg:w-0.5  transition-all duration-100 ease-linear ${
                  i == activeIndex
                    ? "bg-gradient-to-r from-[#420101] to-[#970303] lg:w-1.5"
                    : "bg-text/30"
                }`}
              ></button>
            ))}
          </div>
          <div className="absolute hidden lg:block -top-0 lg:-right-[7px] w-full h-full  lg:w-1/2 ">
            <img src={project} className="h-full w-full  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects2