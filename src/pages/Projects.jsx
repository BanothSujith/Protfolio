import { useEffect, lazy } from "react";
import IsInView from "../Hooks/IsInView.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircle } from "react-icons/io5";


function Projects() {
       const [ref1, isVisible, pageView] = IsInView(0.2, " 0px 0px 0px 0px ");
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


  return (
    <div
      ref={pageView}
      id="projects"
      className=" w-full  bg-surface  text-text text-center  pt-15 md:px-12   flex justify-between items-center flex-col gap-4 h-full lg:h-screen pb-6 md:pb-0  overflow-hidden"
    >
      <h1
        className={`text-5xl font-bold transition-all duration-700 lg:duration- ease-linear ${
          isVisible
            ? "opacity-100 translate-y-0 "
            : "opacity-20  translate-y-100"
        } `}
      >
        Projects
      </h1>

      <div
        ref={(el) => {
          ref1.current = el;
        }}
        className="relative w-full  flex flex-col items-center  pt-10 gap-20  lg:gap-10  overflow-hidden   pb-12   "
      >
        <AnimatePresence>
          {projectsData?.map((project, i) => {
            const [ref2, isVisible2] = IsInView(0.5, "0px");

            return (
              <motion.div
                key={project?.id}
                ref={ref2}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isVisible2
                    ? { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    : { opacity: 0, x: 50 }
                }
                exit={{ opacity: 0, y: 50 }}
                className={`relative group flex  w-[90%] md:w-100 min-h-80 rounded-lg  transition-all duration-500 ease-linear  perspective-distant   transform-view 
        ${
          i % 2 === 0
            ? "md:-translate-x-1/4 lg:-translate-x-[20vw] xl:-translate-x-[25vw]"
            : "lg:translate-x-[20vw] xl:translate-x-[25vw] md:translate-x-1/4"
        } 
      `}
              >
                <div className="absolute bg-cardbg w-full h-full left-0 flex rounded-xl backface-hidden  flex-col gap-2 justify-evenly  shadow-[0px_0px_9px_0px] transition-all duration-1000 ease-initial   group-hover:rotate-y-180">
                  <h2 className=" font-bold text-text underline decoration-1 decoration-dotted text-2xl">
                    {project?.title}
                  </h2>
                  <p className="text-text/70 mx-2 ">{project?.desc}</p>
                  <div className=" flex flex-wrap justify-center gap-x-2 gap-y-3 px-2  font-medium tracking-wide text-text   ">
                    {project?.skills?.map((skill, idx) => (
                      <div
                        key={idx}
                        className=" border border-amber-500/50 bg-amber-500/10 text-sm px-3 py-1 rounded-full font-medium transition-all duration-300 ease-linear   "
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div className="absolute left-0 to-0% w-full h-full bg-gray-900 text-text flex flex-col justify-between items-center border shadow-[0px_0px_9px_0px] rounded-lg -rotate-y-180 group-hover:rotate-y-0 backface-hidden p-4  transform-3d transition-all duration-1000 ease-initial  ">
                  <h2 className=" font-bold text-text underline decoration-1 decoration-dotted text-2xl">
                    {project?.title}
                  </h2>
                  <div className=" flex flex-wrap justify-center gap-x-2 gap-y-3 px-2  font-medium tracking-wide text-text   ">
                    {project?.skills?.map((skill, idx) => (
                      <div
                        key={idx}
                        className=" border border-amber-500/50 bg-amber-500/10 text-sm px-3 py-1 rounded-full font-medium transition-all duration-300 ease-linear hover:text-text/80 hover:bg-surface/60 hover:border-amber-400/70  "
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className=" flex  justify-center gap-x-2 gap-y-3 px-2  font-medium tracking-wide text-text w-full  ">
                    {project?.projectLinks?.map((Links, idx) => {
                      const Type = Links?.label;
                      return (
                        <button
                          key={idx}
                          className={`border border-amber-500/50 bg-amber-500/10  px-3 h-12 rounded-xl font-medium transition-all duration-300 ease-linear hover:text-text/80 hover:bg-surface/60 hover:border-amber-400/70 w-full flex justify-evenly items-center  ${"group"}`}
                        >
                          <Type
                            className={`${
                              Links?.size ? "text-4xl" : "text-3xl"
                            } group-active:translate-x-50 `}
                          />
                          <span className="ml-2">{Links?.type}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* <div className=" border col-start-2 row-start-2 border-amber-300 w-full h-full">
   hi2
            </div>         */}
    </div>
  );
}

export default Projects;
