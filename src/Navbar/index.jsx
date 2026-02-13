// import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import "../index.css";
import { useDispatch,useSelector } from "react-redux";
import { setCurrentPath, setIsNavclickcked } from "../Redux/slice";
import SujithDev from "../components/SujithDev.jsx";
import useInView from "../Hooks/IsInView.jsx";
function index() {
     const [ref, isVisible, pageView] = useInView();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];
  // const location = useLocation();
  const locationRedux = useSelector((state) => state.storeSlice.currentPath);
  
  const dispatch = useDispatch();
  const handleclick = (e, path) => {
    dispatch(setCurrentPath(path.label.toLowerCase()));
   dispatch(setIsNavclickcked(true));   
     e.preventDefault();
     document
       .getElementById(path.label.toLowerCase())
       .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      ref={ref}
      className="fixed top-0 w-full p-0.5   md:pb-2 md:px-2 grid grid-cols-3 h-10 md:h-20 content-center z-20  "
    >
      <div
        className={`sujithdev  md:pt-2 grid grid-cols-1 content-center transition-all duration-75 ease-linear`}
      >
        <SujithDev />
      </div>
      {/* mobile navbar */}
      <nav
        className=" md:hidden  fixed bottom-0 p-2 overflow-auto w-full scrollbar bg-[rgba(17,17,17,0.69)] backdrop-blur-3xl flex justify-evenly items-center shadow-[inset_0rem_1rem_10px_0px_rgba(255,255,255,.1)]
       "
      >
        {navLinks.map((link, i) => {
          const isActive = locationRedux == link.label.toLowerCase();

          return (
            <button
              key={link.path}
              onClick={(e) => handleclick(e, link)}
              className={`navlink2 relative z-1 px-3 py-1  text-xs tracking-widest  hover:scale-105 transition-all duration-75  ease-linear animate-navAnimate  `}
              style={{ animationDuration: `${i * 0.6}s` }}
            >
              {isActive && (
                <motion.div
                  layoutId="active"
                  className=" absolute inset-0 rounded-full bg-[rgb(40,35,48)]  shadow-[inset_0rem_.2rem_10px_0px_rgba(255,252,252)]  "
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span
                className={`relative  ${
                  isActive ? "text-[#1eb9ce] " : "text-mnav  "
                }`}
              >
                {link.label}
              </span>
            </button>
          );
        })}
      </nav>
      {/* lab and larger  screen navbar */}

      <nav
        className={`hidden  relative z-0 px-10 pr-6 py-4   gap-x-2 md:flex h-full items-center justify-start transition-all duration-75 ease-linear `}
      >
        {navLinks.map((link, i) => {
          const isActive = locationRedux == link.label.toLowerCase();

          return (
            <button
              key={link.path}
              onClick={(e) => handleclick(e, link)}
              className={` navlink relative z-1 px-3 py-1  text-xs tracking-widest  hover:scale-105 transition-all duration-75  ease-linear animate-navAnimate  `}
              style={{ animationDuration: `${i * 0.6}s` }}
            >
              {isActive && (
                <motion.div
                  layoutId="active"
                  className=" absolute inset-0 rounded-full bg-[rgb(40,35,48)]  shadow-[inset_0rem_.2rem_10px_0px_rgba(255,252,252)]  "
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span
                className={`relative  ${
                  isActive ? "text-[#fdffff] " : "text-text  "
                }`}
              >
                {link.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default index;
