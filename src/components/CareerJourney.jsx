import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const journey = [

    {
        year: "Aug 2025 – Present",
        title: "Zoho & Full Stack Developer",
        company: "@Bhavatah Soft Tech LLP",
        desc: "Working on Zoho ecosystem solutions including CRM, Creator, Sign, and Writer, developing automation workflows using Deluge. Built and integrated REST APIs, implemented webhooks for real-time data synchronization, and developed backend services using Node.js to support business logic and integrations."
    },

    {
        year: "Dec 2024 – Apr 2025",
        title: "Frontend Developer Intern",
        company: "@Versai Tech Solutions",
        desc: "Developed responsive web applications using React.js and Tailwind CSS, integrated APIs into frontend applications, and collaborated with the team to enhance UI/UX and overall application performance."
    },

    {
        year: "May 2024 – Jun 2024",
        title: "MERN Stack Developer Intern",
        company: "@Rinex",
        desc: "Built a real-time chat application using the MERN stack (React, Node.js, Express, MongoDB) with WebSockets, implemented REST APIs and authentication, and designed responsive interfaces for cross-device compatibility."
    },

    {
        year: "2021 – 2023",
        title: "Learning & Project Phase",
        company: "#Self Learning",
        desc: "Focused on mastering MERN stack development, Data Structures and Algorithms, and built foundational projects such as chat applications and full-stack platforms to strengthen practical development skills."
    }

];

function CareerJourney() {
    const ref = useRef(null);

    // scroll tracking
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    // line height animation
    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // glowing dot movement
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" ref={ref} className="relative w-full py-24 px-6">
            <div
                
            className="max-w-6xl mx-auto text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold font-heading text-frombs">
                    Career Journey
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                className="text-text-primary/60 mt-4 text-sm font-semibold tracking-widest">
                    An evolving path of growth, learning, and impact
                </motion.p>
            </div>

          

            {/* ITEMS */}
            <div className="space-y-24 grid grid-cols-2 relative pt-20 z-10">
                {/* LINE */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[5px] h-full bg-border">
                    <motion.div
                        style={{ height }}
                        className="w-full bg-gradient-to-b -z-10 from-toName/30 via-frombs to-fromName/60"
                    />
                </div>

                {/* GLOW DOT */}
                <motion.div
                    style={{ top: y }}
                    className="absolute -z-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-radial from-bg-primary  via-fromName from-25% to-95% to-transparent shadow-[0_0_25px_8px_rgba(168,85,247,0.6)]"
                />
                {journey.map((item, index) =>
                {
                    const rotate =  window.innerWidth < 1270 && index % 2 === 0 ? "-15deg" : "15deg"; 
                   return (
                    <div
                        key={index}
                        className={`flex relative col-span-2 items-center justify-center }`}
                    >
                           <motion.div
                               className="hidden lg:block bg-radial from-fromName via-transparent to-toName rounded-full absolute p-2"
                           >

                           </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0, rotate:rotate }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className={`w-full  md:w-lg bg-bg-primary border-3 border-border rounded-2xl p-6 py-8 shadow-lg ${index % 2 === 0 ? " lg:-translate-x-[60%]" : "lg:translate-x-[60%]" }`}
                        >
                           
                            <span className="text-text-primary/60 font-semibold">
                                {item.year}
                            </span>

                            <h3 className=" text-3xl font-bold mt-2">
                                {item.title}
                            </h3>

                            <p className="text-lg text-text-primary/70 mt-1">
                                {item.company}
                            </p>

                            <p className="text-text-primary/60 text-lg font-medium mt-3 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    </div>
)})}
            </div>
        </section>
    );
}

export default CareerJourney;