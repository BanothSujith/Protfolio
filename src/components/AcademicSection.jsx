import { motion } from "framer-motion";
import { GraduationCap, CheckCircle } from "lucide-react";

export default function AcademicSection() {

    const academics = [
        {
            title: "B.Tech in Computer Science",
            university: "NIMS University, Jaipur Rajasthan",
            duration: "2021 – 2025",
            points: [
                "Completed Bachelor of Technology in Computer Science with a focus on full stack development",
                "Worked on real-world projects using MERN stack and modern frontend technologies",
                "Gained practical experience in API development, system design, and integrations",
                "Focused on problem solving, DSA, and building scalable web applications"
            ]
        },
        {
            title: "Intermediate (12th Grade)",
            university: "State Board",
            duration: "2019 – 2021",
            points: [
                "Secured 97% in Higher Secondary Education",
                "Strong foundation in mathematics and logical reasoning",
                "Developed early interest in programming and technology",
                "Actively participated in academic and technical learning activities"
            ]
        }
    ];

    return (
        <section
        id="education"
        className="py-16 px-6 w-full bg-bg-primary">

            {/* Header */}
            <div className="flex md:translate-x-1/8 items-baseline mx-auto gap-4 mb-10">
                <div className=" p-1 md:p-2 flex items-center justify-center lg:-translate-y-[23%] rounded-xl bg-gray-100 shadow">
                    <GraduationCap className="text-gray-700" />
                </div>

                <div className="flex flex-col gap-3 mb-3">
                    <h2 className="text-2xl flex flex-wrap font-heading gap-x-2 lg:text-6xl font-bold">
                        <span>Academic</span>
                        <span className="bg-gradient-to-r from-fromName/60 to-toName/60 bg-clip-text text-transparent">
                            Background
                        </span>
                    </h2>

                    <p className="text-text-primary/70 font-body max-w-xl">
                        Building the theoretical foundation and research methodologies that
                        empower high-performance practical engineering.
                    </p>
                </div>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-10 ">

                {academics.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}

                        transition={{ duration: 0.3, delay: index * 0.2 }}

                        whileHover={{
                            y: -5,
                        }}
                        key={index}
                        className="relative bg-bg-primary ring-2 ring-shadow2 rounded-2xl shadow-[0px_10px_30px] shadow-shadow2 p-6 hover:shadow-xl transition duration-300"
                    >
                        {/* Icon */}
                        <div className="p-3 w-fit bg-gray-100 rounded-xl mb-4">
                            <GraduationCap className="w-5 h-5 text-gray-700" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                        </h3>

                        {/* University */}
                        <p className="text-sm text-text-primary/90 mb-3">
                            {item.university} • {item.duration}
                        </p>

                        <hr className="mb-4" />

                        {/* Points */}
                        <ul className="space-y-3 text-sm text-text-primary/80">
                            {item.points.map((point, i) => (
                                <li key={i} className="flex gap-2">
                                    <CheckCircle className="w-4 h-4 text-text-primary/70 mt-1" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}