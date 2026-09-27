import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, CheckCircle } from "lucide-react";
import { Crown, Brain, Zap, HeartHandshake, Target, Users } from "lucide-react";
export default function SkillsSection() {

    const skills = [
        { name: "React.js", percent: 95, icon: <Code size={18} /> },
        { name: "Node.js / Express", percent: 90, icon: <Server size={18} /> },
        { name: "JavaScript", percent: 92, icon: <Code size={18} /> },
        { name: "MongoDB", percent: 88, icon: <Database size={18} /> },
        { name: "Zoho", percent: 85, icon: <Cloud size={18} /> },
    ];

    const traits = [
        {
            name: "Leadership",
            icon: <Crown size={14} />,
            className: "bg-yellow-100 text-yellow-700"
        },
        {
            name: "Problem Solving",
            icon: <Brain size={14} />,
            className: "bg-purple-100 text-purple-700"
        },
        {
            name: "Agile Methodologies",
            icon: <Zap size={14} />,
            className: "bg-blue-100 text-blue-700"
        },
        {
            name: "Mentorship",
            icon: <HeartHandshake size={14} />,
            className: "bg-pink-100 text-pink-600"
        },
        {
            name: "Strategic Thinking",
            icon: <Target size={14} />,
            className: "bg-orange-100 text-orange-700"
        },
        {
            name: "Cross-Team Collaboration",
            icon: <Users size={14} />,
            className: "bg-green-100 text-green-700"
        },
    ];
    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
            },
        }),
    };
    return (
        <section id="skills" className="py-16 px-6 bg-bg-primary">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-10"
            >
                <div className="p-3 bg-gray-100 text-gray-700 rounded-xl">
                    <Code />
                </div>
                <h2 className="text-3xl font-bold">
                    Expertise & Skills
                </h2>
            </motion.div>

            {/* MAIN GRID */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {/* LEFT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className="bg-bg-primary rounded-2xl p-6 shadow-[0px_10px_30px] shadow-shadow2 ring-2 ring-border"
                >
                    <h3 className="text-xl font-bold font-heading mb-6">
                        Technical Arsenal
                    </h3>

                    <div className="space-y-6">

                        {skills.map((skill, index) => (
                            <div key={index}>

                                {/* TOP ROW */}
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </div>
                                    <span className="text-sm font-medium">
                                        {skill.percent}%
                                    </span>
                                </div>

                                {/* PROGRESS BAR */}
                                <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        viewport={{ once: false }}
                                        className="h-full bg-gradient-to-r from-toName via-green-400/60 to-fromName rounded-full"
                                    />
                                </div>

                            </div>
                        ))}

                    </div>
                </motion.div>

                {/* RIGHT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                    className="bg-bg-primary rounded-2xl p-6 shadow-[0px_10px_30px] shadow-shadow2 ring-2 ring-border"
                >
                    <h3 className="text-lg font-semibold mb-6">
                        Professional Traits
                    </h3>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {traits.map((trait, i) => (
                            <motion.div
                            key={i}
                                custom={i}
                                variants={tagVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center transition-all duration-100 ease-out gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm ${trait.className}`}
                            >
                                {trait.icon}
                                <span>{trait.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* BOTTOM CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: false }}
                        className="p-4 bg-gradient-to-r from-transparent via-fromName via-fromName/10 to-transparent rounded-xl border"
                    >
                        <div className="flex gap-3 items-start">
                            <CheckCircle className="text-fromName size-15 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg font-heading">
                                    Constant Learner & Tech Explorer
                                </h4>
                                <p className="text-sm font-semibold tracking-wider text-text-primary/70">
                                    Continuously learning new technologies, building projects,
                                    and improving development skills.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}