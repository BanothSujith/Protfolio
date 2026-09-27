import { motion } from "framer-motion";
import { useState } from "react";

function GlowCard({ item, index }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
            }}
            whileHover={{y:-4}}
            className="relative group p-8 rounded-3xl border border-border 
      bg-bg-primary/50 backdrop-blur-md 
      shadow-[0_10px_30px_rgba(0,0,0,0.05)]
      hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]
      
      transition-all duration-300 ease-out text-left overflow-hidden"
        >

            {/* 🔥 Glow Layer */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, var(--color-fromName) ,  var(--color-tobs), transparent 70%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
        border border-border bg-bg-primary shadow-sm mb-6 
        group-hover:scale-105 transition">
                    <span className="text-text-primary/80">{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-primary/60 font-body leading-relaxed">
                    {item.desc}
                </p>
            </div>
        </motion.div>
    );
}

export default GlowCard;