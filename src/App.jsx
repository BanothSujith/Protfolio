import Routerr from './Routers/index.jsx'
import Navbar from './Navbar/index.jsx'
import './index.css'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import FooterCopyright from './components/FooterCopyRight.jsx';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';
// import Projects from './pages/Projects.jsx';

function App() {
const params = useLocation();
// console.log(params?.pathname);

  return (
    <div className="  w-full h-full bg-fixed flex   flex-col md:gap-12  font-[Roboto]   bg-surface   select-none overflow-hidden ">
      <div>
        <Helmet>
          <title>{`${
            params?.pathname == "/"
              ? "Banoth Sujith"
              : `${params?.pathname
                  .replace("/", "")
                  .charAt(0)
                  .toUpperCase()
                  .concat(
                    params?.pathname.replace("/", "").slice(1).toLowerCase()
                  )} `
          } `}</title>
        </Helmet>
        <Navbar />
        <Routerr />

        <About />
        <Projects />
        <Contact />
        <FooterCopyright />
      </div>
    </div>
  );
}

export default App
