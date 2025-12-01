// import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavclickcked } from "../Redux/slice";
import { useState } from "react";
function index() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];
  // const location = useLocation();
  const [location, setLocation] = useState("home");
  const navcliked = useSelector((state) => state.storeSlice.isNavclickcked);
  const dispatch = useDispatch();
  const handleclick = (e, path) => {
    setLocation(path.label.toLowerCase());
   dispatch(setIsNavclickcked(true));   
     console.log(navcliked);
     e.preventDefault();
     document
       .getElementById(path.label.toLowerCase())
       .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="fixed top-0 w-full p-0.5   md:pb-2 md:px-2 flex h-10 md:h-20 justify-between items-center z-50 ">
      <div className=" test  md:pt-2  h-full  flex flex-col hover:scale-105 transition-all duration-75 ease-linear hover:skew-2 ">
        <p
          className="flex justify-center items-center text-text/90 font-medium  tracking-widest text-xl rounded-full pl-4 lg:pl-12  "
          style={{ fontFamily: "Momo Signature" }}
        >
          Sujith
        </p>
        <p className="  flex gap-2 transform translate-x-[170%] w-[40%] h-[3px]">
          <span className=" bg-text/90  py-[1px] w-full h-full rounded-[100%_30%_50%_12%] "></span>
          <span className="bg-text/90 h-  rounded-full ">.</span>
        </p>
      </div>
      {/* mobile navbar */}
      <nav
        className=" md:hidden  fixed bottom-0 p-2 overflow-auto w-full scrollbar bg-[#0a1429] 
       "
      >
        {navLinks.map((link) => {
          const isActive = location == link.label.toLowerCase();

          return (
            <button
              key={link.path}
              onClick={(e) => handleclick(e, link)}
              className="relative z-11 px-3 py-1  font-normal text-text "
            >
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="absolute inset-0 rounded-full bg-[#217faa] border border-[#5da1ce] shadow-[0px_0px_10px_2px_rgba(5,176,255,.8)] "
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className={`relative`}>{link.label}</span>
            </button>
          );
        })}
      </nav>
      {/* lab and larger  screen navbar */}

      <nav
        className="hidden  relative z-0 px-10 pr-6 py-4 
       animate  md:flex gap-x-2  h-full items-center justify-center 
       "
      >
        {navLinks.map((link) => {
          const isActive = location == link.label.toLowerCase();

          return (
            <button
              key={link.path}
             
              onClick={(e) => handleclick(e, link)}
              className="relative z-11 px-4 py-2  font-bold tracking-widest uppercase  hover:scale-105 transition-all duration-1000  ease-linear  "
            >
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="absolute inset-0 rounded-full bg-[#217faa] border border-[#5da1ce] shadow-[0px_0px_10px_2px_rgba(5,176,255,.8)]  "
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
      <div>
       
      </div>
    </div>
  );
}

export default index;
