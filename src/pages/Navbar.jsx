import { useEffect, useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
const navLinks = [
    { id: "#home", name: "Home", icon: <IoHome size={15} className="-translate-y-0.5 " /> },
    { id: "#about", name: "About", icon: <HiIdentification size={18} className="-translate-y-[1px]" /> },
    {
        id: "#experience",
        name: "Experience",
        icon: <FaLaptopCode size={18} />,
    }, { id: "#skills", name: "Skills", icon: <FaCode size={18} /> },
   
    // { id: "#contact", name: "Contact" },
    { id: "#education", name: "Education", icon: <FaLaptopFile size={18} /> },
    {
        id: "#contact",
        name: "Contact",
        icon: <BiSolidPhoneCall size={18} />,
    },
];

function Navbar({ theme, heightRef }) {
    const { toggleTheme, isDarkMode } = theme;
 const [isMenuOpen, setIsMenuOpen] = useState(false);
    const wrapperRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!wrapperRef.current) return;

            if (!wrapperRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    return (
        <nav ref={heightRef} className="fixed top-4 flex w-full md:w-fit md:gap-16 justify-between rounded-full bg-white/5 backdrop-blur-[2px] px-8 py-4 border-2 border-border z-50 ">
           
            <button name="Banoth Sujith" className="group flex items-center gap-2  ">
                <div className="relative rounded-lg p-[2px] shadow-xs shadow-shadow bg-linear-45 from-frombs via-transparent to-tobs hover:scale-105 transition-all duration-100 ease-out">
                    <div className=" bg-bg-primary rounded-lg px-1 py-1 font-bold text-lg font-body">
                        <span
                            className="inline-block font-heading bg-linear-90 from-fromName via-toName to-fromName text-transparent bg-clip-text font-extrabold"
                        >
                            BS
                        </span>
                    </div>
                </div>
                <div className="leading-3 font-bold tracking-tight">
                    <h3 name="Banoth Sujith" className="font-heading font-extrabold text-sm bg-linear-90 from-fromName  to-toName bg-clip-text text-transparent  ">
                        Banoth Sujith
                    </h3>
                    <h6 className=" font-extrabold text-text-primary/50 text-[.7rem] ">PORTFOLIO</h6>
                </div>
            </button>
            <section className=" hidden lg:flex gap-3 justify-center items-center">
                {navLinks.map((link) => (
                    <button onClick={() => {
                        const element = document.querySelector(link.id);
                        if (element) {
                            const offset = 80; // navbar height
                            const top =
                                element.getBoundingClientRect().top + window.scrollY - offset;

                            window.scrollTo({
                                top,
                                behavior: "smooth",
                            });
                        }
                    }}
                     key={link?.name} className=" px-1 py-1 rounded-full group flex justify-center items-center gap-0.5 font-semibold text-sm font-heading transition-colors duration-100 ease-out">
                    <div className="text-tobs group-hover:text-frombs" >
                            {link?.icon}
                    </div>
                        <span className="text-text-primary/70 group-hover:bg-[linear-gradient(90deg,purple,blue)] group-hover:text-transparent group-hover:bg-clip-text">{link?.name || "home"}</span>
                    </button>
                ))}
            </section>
            <motion.button
                onClick={(e) => toggleTheme(e)}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="border border-border rounded-full h-10 aspect-square
             hover:border-text-primary/40 
             hover:shadow-md relative overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    {isDarkMode ? (
                        <motion.span
                            key="sun"
                            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex items-center justify-center"
                        >
                            <LuSun
                                size={20}
                                className="text-[#f1e203]"
                            />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="moon"
                            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex items-center justify-center"
                        >
                            <FaRegMoon
                                size={20}
                                className="text-frombs"
                            />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
            <button ref={wrapperRef} onClick={() => setIsMenuOpen(prev => !prev)} className="lg:hidden relative grid place-items-center bg-bg-primary border border-border shadow-[0px_1px_3px] shadow-shadow p-2 rounded-full">

{
    Array.from({ length: 4 }).map((_, index) => (
        <span key={index} className="w-6 h-0.5 bg-text-primary/90 rounded-full"></span>
    ))
                }            <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                           
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full -left-[200%] bg-bg-primary border border-border p-1 lg:hidden space-y-1 rounded-lg shadow-[1px_1px_5px] shadow-shadow mt-2"
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link?.name}
                                    onClick={() => {
                                        const element = document.querySelector(link.id);
                                        setIsMenuOpen(false);
                                        if (element) {
                                            const offset = 80; // navbar height
                                            const top =
                                                element.getBoundingClientRect().top + window.scrollY - offset;

                                            window.scrollTo({
                                                top,
                                                behavior: "smooth",
                                            });
                                        }
                                       
                                    }}
                                    className="flex hover:bg-shadow/80 w-full px-2 rounded-lg py-1 justify-start items-center gap-1 font-semibold text-text-primary/90 font-heading transition-colors duration-100"
                                >
                                    <div className="text-tobs group-hover:text-frombs" >
                                        {link?.icon}
                                    </div>
                                    <span className="text-text-primary/70 group-hover:bg-[linear-gradient(90deg,purple,blue)] group-hover:text-transparent group-hover:bg-clip-text">{link?.name || "home"}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </nav>
    );
}

export default Navbar;