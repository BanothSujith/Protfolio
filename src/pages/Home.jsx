import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import IdcardSection from "../components/IdcardSection";

function Home() {
  const social = [
    
    {
      label: <FaLinkedin />,
      link: "https://www.linkedin.com/in/banothsujith/"
    },
    {
      label: <FiMail />,
      link: "mailto:banothsujith4@gmail.com"
    },
    {
      label: <FaGithub />,
      link: "https://github.com/BanothSujith"
    },
    {
      label: <FaWhatsapp />,
      link: "https://wa.me/917995037426"
    },
    
  ];
  return (
    <section id="home" className="w-full flex items-center justify-center px-6 md:px-16 pb-12 grid-bg">
      <div className="w-full md:p-12 grid lg:grid-cols-2 gap-10 items-center justify-evenly ">

        <div className="space-y-10 grid place-items-center md:place-items-start md:justify-end text-center md:text-start ">

          {/* Status */}
          <motion.div
            initial={{
              opacity: 0,
              translateY: 50
            }}
            whileInView={{
              opacity: 1,
              translateY: 0
            }}
            viewport={{ once: false }}

            transition={{
              duration: .4,
              ease: "backOut"
            }}
          className="inline-flex w-fit items-center gap-2 px-4 py-1.5 bg-bg-primary rounded-full border border-border text-xs font-medium text-text-primary/70 tracking-wide font-heading shadow-2xl">
            <span className="w-2 h-2 bg-green-400 opacity-75 rounded-full"></span>
            Available for work
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              translateY: 50
            }}
            whileInView={{
              opacity: 1,
              translateY: 0
            }}
            viewport={{ once: false }}

            transition={{
              duration: .4,
              ease: "backOut"
            }}
          className="flex flex-col gap-2 md:gap-6 md:text-6xl font-bold tracking-tight font-heading">
            <span className="text-5xl md:text-[4rem]">Hi, I'm</span>
            <motion.span
              initial={{
                opacity: 0,
                translateY: 50
              }}
              whileInView={{
                opacity: 1,
                translateY: 0
              }}
              viewport={{ once: false }}

              transition={{
                duration: .4,
                ease: "backOut"
              }}
            className="bg-gradient-to-r text-5xl  md:text-[6rem] from-fromName from-30% via-tobs via-40% to-toName to-90% bg-clip-text text-transparent">
              Banoth Sujith
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              translateY: 50
            }}
            whileInView={{
              opacity: 1,
              translateY: 0
            }}
            viewport={{ once: false }}

            transition={{
              duration: .5,
              ease: "backOut"
            }}
          className="text-text-primary/60 font-body font-extrabold text-xl leading-relaxed max-w-lg md:max-w-xl">
            I build exceptional and accessible digital experiences.
            Specialized in crafting premium web applications with
            elegant design systems.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.button
              initial={{
                opacity: 0,
                translateX: -50
              }}
              whileInView={{
                opacity: 1,
                translateX: 0
              }}
              viewport={{ once: false }}

              transition={{
                duration: .5,
                ease: "backOut"
              }}
              onClick={()=>{
                const element = document.querySelector("#about");
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
            className="px-5 py-2 rounded-full bg-transparent z-10 text-text-primary font-body font-bold  ring-2 ring-shadow relative after:inset-0 after:bg-frombs/80 after:-z-10 hover:text-bg-primary after:absolute overflow-hidden after:-translate-x-full hover:after:translate-x-0 after:transition-all after:duration-100 after:ease-out flex items-center gap-2 hover:scale-105 hover:-translate-y-[1px] transition-all duration-75 ease-out hover:shadow-xl hover:shadow-shadow">
              View Work 
            </motion.button>

            <motion.a
              href="/Banoth_Sujith_Resume.pdf"  
              download
              initial={{
                opacity: 0,
                translateX: 50
              }}
              whileInView={{
                opacity: 1,
                translateX: 0
              }}
              viewport={{ once: false }}

              transition={{
                duration: .5,
                ease: "backOut"
              }}
            className="px-6 py-2 rounded-full bg-transparent z-10 text-text-primary font-body font-bold  ring-2 ring-shadow relative after:inset-0 after:bg-tobs/80 after:-z-10 hover:text-bg-primary after:absolute overflow-hidden after:-translate-x-full hover:after:translate-x-0 after:transition-all after:duration-100 after:ease-out flex items-center gap-2 hover:scale-105 hover:-translate-y-[1px] transition-all duration-75 ease-out hover:shadow-xl hover:shadow-shadow"
            >
              Resume
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 p-2 text-2xl text-text-primary/70">
        {
          social.map((data,i)=>(
            <motion.button 
              initial={{
                opacity: 0,
                translateY: 50
              }}
              whileInView={{
                opacity: 1,
                translateY: 0
              }}
              viewport={{ once: false }}

              transition={{
                duration: `${(i+1)*.3}`,
                ease: "backOut"
              }}
            key={i} onClick={() => window.open(data.link, "_blank")} className={` ${i % 2 === 0 ? "hover:text-tobs" : "hover:text-frombs" }  hover:scale-105 cursor-pointer transition`}>
              {data.label}
            </motion.button>
          ))
        }
            
          </div>
        </div>

        {/* RIGHT - CARD */}
        <IdcardSection/>

      </div>
    </section>
  );
}

export default Home;