import { motion } from "framer-motion";
import {
    Home,
    User,
    Briefcase,
    Folder,
    GraduationCap,
    MessageCircle,
    Send,
} from "lucide-react";
import { FaCode } from "react-icons/fa6";

import { useState } from "react";

export default function FloatingNav() {
    const [hovered, setHovered] = useState(null);

    const navLinks = [
        { icon: <Home size={20} />, id: "#home",name:"Home" },
        { icon: <User size={20} />, id: "#about", name:"About" },
        { icon: <Briefcase size={20} />, id: "#experience", name:"Experience" },
        { icon: <FaCode size={20} />, id: "#skills",name:"Skills" },
        { icon: <GraduationCap size={20} />, id: "#education",name:"Education" },
        { icon: <MessageCircle size={20} />, id: "#contact", name:"Contact" },
        // { icon: <Send size={20} />, id: "#footer" },
    ];

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            const offset = 80; // navbar height
            const top =
                element.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }
    };

    // 🔥 Smooth dock effect
    const getTransform = (index) => {
        if (hovered === null) {
            return { scale: 1, y: 0, x: 0 };
        }

        const distance = Math.abs(index - hovered);

        if (distance === 0) {
            return { scale: 1.3, y: -12, x: 0 }; // main
        }
        if (distance === 1) {
            return {
                scale: 1.15,
                y: -6,
                x: index < hovered ? -6 : 6, // push away
            };
        }
        if (distance === 2) {
            return {
                scale: 1.05,
                y: -2,
                x: index < hovered ? -3 : 3,
            };
        }

        return { scale: 1, y: 0, x: 0 };
    };
    return (
        <div
            className=" bg-bg-sec p-1 rounded-full border border-border max-w-[95%] overflow-visible"
        >
            <div
                className="flex items-center gap-3 md:gap-4 px-2 py-0.5 md:py-0 md:px-6 rounded-full bg-bg-primary shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border overflow-x-auto scrollbar md:overflow-visible overflow-y-visible"
            >
                {navLinks.map((link, i) => {
                    const transform = getTransform(i);

                    return (
                        <motion.button
                            key={i}
                            onClick={() => scrollToSection(link.id)}
                            onHoverStart={() => setHovered(i)}
                            onHoverEnd={() => setHovered(null)}
                            animate={transform}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 18,
                            }}
                            className="relative group p-3 md:p-4 rounded-full bg-bg-primary ring-1 ring-shadow shadow-[0px_10px_30px] shadow-shadow transition-colors duration-300 md:-translate-y-2 flex items-center justify-center"
                        >
                            {/* ICON */}
                            <span className="text-text-primary">
                                {link.icon}
                            </span>

                            {/* 🔥 TOOLTIP */}
                            <motion.span
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={
                                    hovered === i
                                        ? { opacity: 1, y: -5, scale: 1 }
                                        : { opacity: 0, y: 10, scale: 0.8 }
                                }
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap px-3 py-1 rounded-full bg-bg-primary border border-border text-[.7rem] font-body text-text-primary/70 font-semibold shadow-lg pointer-events-none"
                            >
                                {link.name}
                            </motion.span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}