import React, { useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import IDTag from "./IDTag";

function IdcardSection() {
    const rotate = useMotionValue(0);
    function handleDrag(event, info) {
        const { x } = info.offset;
        rotate.set(-x * 0.2);
    }

    const handleDragEnd = () => {
        const value = rotate.current;
        animate(rotate, [value, -1 * value, value / 2, -1 * value / 2, value / 4, -1*(value / 4),0], {
            duration: 2.2,
            ease: "easeInOut",
        });
    };

    const handleClick = () => {
        animate(rotate, [0, 40, -35, 20, -10, 3, 0], {
            duration: 1.2,
            ease: "easeInOut",
        });
    };

    return (
        <motion.div
        initial={{
            opacity:0,
            translateX:50
        }}
        whileInView={{
            opacity:1,
            translateX:0
        }}
        transition={{
            duration:.4,
            ease:"backOut"
        }}
        viewport={{ once: false,amount:.3 }}

            className="flex flex-col items-center select-none cursor-grab active:cursor-grabbing"
        >
            {/* Hook */}
                <div className="h-5 w-5 border border-bg-primary translate-y-2 z-10 bg-[#333232ec] rounded-full"></div>
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={handleClick}
                style={{
                    rotate,
                    transformOrigin: "top center"
                }}
                className="flex flex-col items-center select-none cursor-grab active:cursor-grabbing"
            >
            <IDTag className="w-full h-full -z-10" />
            {/* CARD */}
            <div className="rounded-3xl ring-1 ring-border shadow-[0px_12px_30px_0px] shadow-shadow2 overflow-hidden bg-bg-primary space-y-4 -translate-y-4 relative">

                {/* Top Gradient */}
                <div className="flex flex-col items-center gap-4 p-2 pb-6 rounded-t-xl bg-gradient-to-br from-toName via-bg-primary to-frombs">
                    <div className="w-12 h-3 rounded-2xl bg-black"></div>

                    {/* Profile Image */}
                    <div className="w-28 h-28 rounded-full p-[4px] bg-gradient-to-t from-toName to-fromName">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <img
                                src="/sujith.webp"
                                alt="Sujith"
                                draggable={false}
                                className="w-full h-full object-cover rounded-full pointer-events-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center gap-3 text-center mx-6 pb-8 border-b border-text-primary/70">
                    <h3 className="font-extrabold text-4xl font-heading text-text-primary">
                        Banoth Sujith
                    </h3>

                    <p className="font-extrabold font-body text-xl tracking-wide rounded-full px-4 ring-1 ring-shadow w-fit text-center text-text-primary">
                        Frontend Developer
                    </p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-y-4 border px-3 py-4 rounded-2xl border-border mx-6">
                    <div className="flex flex-col">
                        <span className="text-text-primary/60 uppercase text-xs font-bold">
                            Specialty
                        </span>
                        <span className="text-text-primary font-bold tracking-tighter">
                            Full Stack Developer
                        </span>
                    </div>

                    <div className="flex flex-col px-3">
                        <span className="text-text-primary/60 uppercase text-xs font-bold">
                            Location
                        </span>
                        <span className="text-text-primary font-bold tracking-tighter">
                            Mahabubabad, India
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-text-primary/60 uppercase text-xs font-bold">
                            Experience
                        </span>
                        <span className="text-text-primary font-bold tracking-tighter">
                            1+ year
                        </span>
                    </div>

                    <div className="flex flex-col px-6">
                        <span className="text-text-primary/60 uppercase text-xs font-bold">
                            Status
                        </span>
                        <span className="text-[#0ac00a] font-bold tracking-tighter flex gap-1 items-center">
                            <span className="bg-green-400 p-1.5 rounded-full"></span>
                            Available
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 pb-8 text-xs font-semibold text-center text-text-primary/40">
                    BS-PORTFOLIO
                </div>
            </div>
            </motion.div>
        </motion.div>
    );
}

export default IdcardSection;