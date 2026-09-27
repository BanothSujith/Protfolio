import React from "react";
import { motion } from "framer-motion";

function StatsSection({ stats }) {
    return (
        <section className="w-full py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6 ">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .4, ease: "easeOut" }}
                        viewport={{ once: false }}
                    className="text-5xl font-extrabold font-heading leading-tight">
                       <motion.span
                       > Passionate about </motion.span>
                        <span className="bg-gradient-to-r from-toName to-fromName bg-clip-text text-transparent">
                            Digital Excellence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4, ease: "easeOut" }}
                        viewport={{ once: false }}
                    className="text-text-primary/70 font-body leading-relaxed max-w-lg">
                        I build modern, responsive web applications with a strong focus on frontend performance and clean UI. As a Full Stack Developer and Zoho Developer, I specialize in React, Tailwind, and backend integrations, along with Zoho CRM automation and API workflows to deliver scalable, real-world solutions.
                    </motion.p>
                </div>

                {/* RIGHT STATS GRID */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                            whileHover={{scale:1.05 }}
                            className="p-6 rounded-2xl border border-border 
              bg-bg-primary/50 backdrop-blur-md 
              shadow-[0_5px_20px_rgba(0,0,0,0.05)]
               "
                        >
                            <div className="mb-3 text-frombs">{item.icon}</div>

                            <h2 className="text-2xl font-bold text-text-primary">
                                {item.value}
                            </h2>

                            <p className="text-sm text-text-primary/60">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;