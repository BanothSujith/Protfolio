import IsInView from "../Hooks/IsInView.jsx";
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoMdPaperPlane } from "react-icons/io";
import project from "../assets/Projects.png";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Blog Sphire",
    desc: "Blog Sphire is a full-stack blog platform built with React.js, Redux, Node.js, Express.js, MongoDB, and Tailwind CSS. It features secure JWT-based authentication, a responsive UI styled with Tailwind, optimized RESTful APIs for blog posts, comments, and user interactions, and an integrated chatbot for real-time user assistance.",
    link: "https://sujithblog.vercel.app/",
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "React Router",
      "JWT Authentication",
      "RESTful APIs",
      "Chatbot Integration",
      "Responsive Design",
      "Full-Stack Development",
    ],
    projectLinks: [
      {
        type: "GitHub",
        url: "https://github.com/BanothSujith/blog",
        label: FaGithub,
      },
      {
        type: "Visit Site",
        url: "https://sujithblog.vercel.app/",
        label: IoArrowForwardCircle,
        size: 24,
      },
    ],
  },
  {
    id: 2,
    title: "Real Time Chat Application",
    desc: "Real Time Chat Application is a full-stack platform built with React.js, Node.js, Express.js, MongoDB, and CSS. It features secure JWT-based authentication, a responsive UI with React Router, optimized RESTful APIs, and WebSockets for real-time messaging and seamless user interactions.",
    link: "sujithchatapp.vercel.app",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Router",
      "JWT Authentication",
      "RESTful APIs",
      "WebSockets",
      "CSS",
      "Full-Stack Development",
      "Real-Time Communication",
    ],
    projectLinks: [
      {
        type: "GitHub",
        url: "https://github.com/BanothSujith/chat-application",
        label: FaGithub,
      },
      {
        type: "Visit Site",
        url: "https://github.com/BanothSujith/chat-application",
        label: IoArrowForwardCircle,
        size: 24,
      },
    ],
  },
  {
    id: 3,
    title: "Room Booking Frontend",
    desc: "Room Booking Frontend is a responsive static website built with  React.js, and Tailwind CSS. It displays room listings with images sourced from Picsum, provides interactive booking actions with buttons, and logs all data to the console for demonstration purposes. The layout is fully responsive, optimized for both desktop and mobile devices.",
    link: "#",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Frontend Development",
      "Interactive UI",
      "Static Data Display",
    ],
    projectLinks: [
      {
        type: "GitHub",
        url: "https://github.com/BanothSujith/booking",
        label: FaGithub,
      },
      {
        type: "Visit Site",
        url: "https://bookingrooms.vercel.app/",
        label: IoArrowForwardCircle,
        size: 24,
      },
    ],
  },
  {
    id: 4,
    title: "Orphan Website",
    desc: "Orphan Website is a static, responsive web application built with React.js and Tailwind CSS, featuring a modern UI/UX design. It includes About Us and Contact sections, interactive elements, and clean navigation. The project demonstrates front-end best practices such as component-based architecture, state management, responsive layouts, and accessibility considerations.",
    link: "#",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Frontend Development",
    ],
    projectLinks: [
      {
        type: "GitHub",
        url: "https://github.com/BanothSujith/Orphan",
        label: FaGithub,
      },
      {
        type: "Visit Site",
        url: "https://orphan.vercel.app/",
        label: IoArrowForwardCircle,
        size: 24,
      },
    ],
  },
  {
    id: 5,
    title: "ASH Website",
    desc: "ASH Website is a React-based web application showcasing nested routing and structured page navigation. Built with React.js and Tailwind CSS, it demonstrates clean component-based architecture, interactive navigation, and responsive design. The project highlights proficiency in React Router, including nested and dynamic routes, while maintaining a modern and accessible UI.",
    link: "#",
    skills: [
      "React.js",
      "React Router",
      "Nested Routing",
      "Tailwind CSS",
      "Responsive Design",
      "Frontend Development",
    ],
    projectLinks: [
      {
        type: "GitHub",
        url: "https://github.com/BanothSujith/ASH",
        label: FaGithub,
      },
      {
        type: "Visit Site",
        url: "https://ngo-hkz8.vercel.app/",
        label: IoArrowForwardCircle,
        size: 24,
      },
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
  const refproject = useRef();
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
      e.preventDefault();
      refdes?.current?.scrollIntoView({ behavior: "smooth" });
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
  function handledots(i) {
    if (activeIndex > i) {
      setDirection("up");
    } else {
      setDirection("down");
    }
    setActiveIndex(i);
  }
  const halndleclick = (url) => {
    window.open(url);
  };
  return (
    <div
      ref={(ele) => {
        ref.current = ele;
        pageView.current = ele;
      }}
      id="projects"
      className="h-fit md:h-full w-full text-text flex flex-col justify-center items-center gap-6  lg:pt-18 overflow-hidden "
    >
      <h1
        className={`text-3xl md:text-5xl font-bold transition-all duration-700 lg:duration- ease-linear hidden lg:block ${
          isVisible
            ? "opacity-100 translate-y-0 "
            : "opacity-0  translate-y-100"
        } `}
      >
        Projects
      </h1>
      <div  className="flex justify-center flex-col lg:flex-row items-center  h-full lg:px-6 w-full ">
        <div className="h-full w-full  lg:hidden block ">
          <img
            src={project}
            alt="projects"
            loading="lazy"
            className="h-[30vh] md:h-[30rem] w-full lg:hidden object-center  md:object-cover  "
          />
        </div>

        <div
          ref={refdes}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className=" relative   h-full   grid items-center lg:bg-cardbg/40 w-full   lg:overflow-hidden "
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className="h-[80vh]  md:h-[45rem]  p-4 lg:p-12 flex justify-center  lg:justify-center items-center flex-col lg:w-1/2 gap-4  md:gap-8 lg:gap-4  "
            >
              <h2 className=" text-2xl md:text-4xl font-bold md:mb-2 ">
                {projectsData[activeIndex].title}
              </h2>
              <p className="text-text/70 text-sm md:text-xl md:mx-2 text-center md:w-3/4 tracking-wide md:leading-relaxed ">
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
              <div className="flex gap-4 md:gap-16 w-full justify-center mt-6 md:mt-12 ">
                {projectsData[activeIndex]?.projectLinks?.map((Links, idx) => {
                  const Type = Links?.label;
                  return (
                    <button
                      onClick={() => halndleclick(Links?.url)}
                      key={idx}
                      className={`border border-amber-500/50 bg-amber-500/10  md:px-3 h-12 rounded-xl font-medium transition-all duration-300 ease-linear hover:text-text/80 hover:bg-surface/60 hover:border-amber-400/70 w-1/2 md:full flex justify-center md:gap-4 items-center  group overflow-hidden`}
                    >
                      <Type
                        className={`${Links?.size ? "text-4xl" : "text-3xl"}  `}
                      />
                      <span className="ml-2">{Links?.type}</span>
                      <div className="pl-2 lg:pl-0 transform lg:-translate-x-20 lg:translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-75 lg:duration-200 text-text group-active:-translate-y-10 group-active:translate-x-10 ">
                        <IoMdPaperPlane size={25} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="absolute w-full  lg:w-3 h-2 lg:h-full  left-0 lg:left-[calc(50%)]
top-0 flex lg:flex-col gap-[2px] items-center  "
          >
            {Array.from({ length: projectsData.length }).map((_, i) => (
              <button
                onClick={() => handledots(i)}
                key={i}
                className={` h-1 lg:h-full rounded-full hover:h-4 lg:hover:w-2 w-full lg:w-0.5  transition-all duration-100 ease-linear ${
                  i == activeIndex
                    ? "bg-gradient-to-r from-[#420101] to-[#970303] lg:w-1.5"
                    : "bg-text/30"
                }`}
              ></button>
            ))}
          </div>
          <div className="absolute hidden lg:block -top-0 lg:-right-[7px] w-full h-full  lg:w-1/2 ">
            <img
              src={project}
              alt="projects"
              loading="lazy"
              className="h-full w-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects2;
