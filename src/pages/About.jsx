import { FaCode, FaRegWindowRestore } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdPublic } from "react-icons/md";
import StatsSection from "../components/statsSection";
import WhatIDo from "../components/WhatIDo";
import CareerJourney from "../components/CareerJourney";
import AcademicSection from "../components/AcademicSection";

const stats = [
    {
        icon: <FaCode size={20} />,
        value: "8+",
        label: "Projects Completed",
    },
    {
        icon: <FaRegWindowRestore size={20} />,
        value: "1+",
        label: "Years Experience",
    },
    {
        icon: <HiOutlineUserGroup size={22} />,
        value: "2+",
        label: "Internships",
    },
    {
        icon: <MdPublic size={20} />,
        value: "3+",
        label: "Live Deployments",
    },
];

function About() {
  return (
    <section id="about" className="w-full">
    <StatsSection stats={stats }/>
    <WhatIDo/>
    <CareerJourney/>
    <AcademicSection/>
      </section>
  )
}

export default About