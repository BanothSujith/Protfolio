import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import "../index.css";
function index() {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/users", label: "Users" },
  ];
  const location = useLocation();

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
          const isActive = location.pathname === link.path;

          return (
            <a
              key={link.path}
              to={link.path}
              className="relative z-11 px-3 py-1  font-normal text-text "
              href={"#"+link.label.toLowerCase()}
            >
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="absolute inset-0 rounded-full bg-[#217faa] border border-[#5da1ce] shadow-[0px_0px_10px_2px_rgba(5,176,255,.8)] "
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className={`relative`}>{link.label}</span>
            </a>
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
          const isActive = location.pathname === link.path;

          return (
            <a
              key={link.path}
              to={link.path}
              href={"#" + link.label.toLowerCase()}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(link.label.toLowerCase())
                  .scrollIntoView({ behavior: "smooth" });
              }}
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
            </a>
          );
        })}
      </nav>
      <div>
       
      </div>
    </div>
  );
}

export default index;
