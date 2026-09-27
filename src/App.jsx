import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import useThemeAnimation from "./Hooks/useThemeAnimation";
import { useEffect, useRef } from "react";
import useGetHeight from "./Hooks/useGetHeight";
import About from "./pages/About";
import SkillsSection from "./pages/SkillsSection";
import ContactSection from "./pages/ContactSection";
import FooterCopyright from "./components/FooterCopyright";
import FloatingNav from "./components/FloatingNav";
import useScrollDirection from "./Hooks/useScrollDirection";

function App() {
  const domainUrl = "https://banothsujith.vercel.app/";

  const combinedSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BANOTHSUJITH",
      url: domainUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: developerName,
      jobTitle: "Full-Stack Developer & Frontend Engineer",
      url: domainUrl,

      sameAs: [
        "https://www.linkedin.com/in/banoth-sujith/",
        "https://github.com/BanothSujith",
      ],
    },
  ];
  const theme = useThemeAnimation();
  const { isAnimating, origin, overlayColor } = theme;

  const heightRef = useRef(null);
  const { navHeight, width } = useGetHeight(heightRef);

  const scroll = useScrollDirection();


  const showTopNav = scroll.islessScrolled || scroll.scrolled === "up";
  const showBottomNav = !scroll.islessScrolled;
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_SERVER);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <main
      className="relative w-full overflow-x-hidden flex flex-col items-center bg-bg-primary text-text-primary"
      style={{
        paddingTop:
          width < 768
            ? `calc(${navHeight}px + 8%)`
            : width < 1500
              ? "9%"
              : "5%",
      }}
    >
      <Helmet>
        <JsonLdSchema schemaData={combinedSchema} />
      </Helmet>
      {/* THEME ANIMATION */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="theme-circle"
            className="fixed inset-0 z-[9999] pointer-events-none backdrop:blur-sm"
            style={{
              background: overlayColor,
              opacity: 0.2,
              clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
            }}
            initial={{
              clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
            }}
            animate={{
              clipPath: `circle(150vmax at ${origin.x}px ${origin.y}px)`,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* NAVBAR ANIMATION (FIXED) */}
      <AnimatePresence mode="wait">
        {showTopNav && (
          <motion.div
            key="top-nav"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{
              duration: .3,
              ease: "easeOut"
            }}
            className="fixed top-0 z-50 w-full flex justify-center"
          >
            <Navbar heightRef={heightRef} theme={theme} />
          </motion.div>
        )}

        {showBottomNav && (
          <motion.div
            key="bottom-nav"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{
              duration:.5,
              ease:"easeOut"
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center"
          >
            <FloatingNav />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENT */}
      <Home />
      <About />
      <SkillsSection />
      <ContactSection theme={theme} />
      <FooterCopyright />
    </main>
  );
}

export default App;