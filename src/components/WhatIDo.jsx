import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { MdOutlineSpeed } from "react-icons/md";
import { LuLayers } from "react-icons/lu";
import GlowCard from "./GLowCard";

const services = [
    {
        icon: <FaCode size={22} />,
        title: "Frontend Development",
        desc: "Building modern, responsive, and interactive UIs using React, Tailwind CSS, and JavaScript with a strong focus on performance and user experience.",
    },
    {
        icon: <LuLayers size={22} />,
        title: "Full Stack Development",
        desc: "Developing scalable web applications using the MERN stack with seamless integration between frontend and backend systems.",
    },
    {
        icon: <MdOutlineSpeed size={22} />,
        title: "Backend Development",
        desc: "Creating secure and efficient server-side applications with Node.js, Express, REST APIs, authentication, and database management.",
    },
    {
        icon: <HiOutlinePaintBrush size={22} />,
        title: "Zoho developer",
        desc: "Building and automating business solutions using Zoho ecosystem including CRM, Creator, Sign, Writer, and Deluge scripting with API integrations.",

    },
];

function WhatIDo() {
    return (
        <section className="w-full py-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto text-center space-y-6">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-heading font-extrabold 
          bg-gradient-to-r from-toName to-fromName bg-clip-text text-transparent"
                >
                    What I Do
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-text-primary/60 max-w-2xl mx-auto font-body"
                >
                    Delivering comprehensive digital solutions that cover the entire lifecycle of
                    professional product engineering.
                </motion.p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {services.map((item, index) => (
                        <GlowCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatIDo;