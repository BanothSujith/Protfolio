// import Routerr from './Routers/index.jsx'
import Navbar from './Navbar/index.jsx'
import './index.css'
// import { Helmet } from "react-helmet";
import About from './pages/About.jsx';
// import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import FooterCopyright from './components/FooterCopyright.jsx';
import Home from './pages/Home.jsx';
import Projects2 from './pages/Projects2.jsx';
import { useSelector } from 'react-redux';

function App() {
  const theme  = useSelector((state) => state.storeSlice.themeType);
  if(theme === 'dark'){
    document.getElementsByTagName('body')[0].className='dark';
  }else{
    document.getElementsByTagName('body')[0].className='bright';
  }
  document.documentElement.className=theme;
  return (
    <div className=" relative w-full h-full bg-fixed flex   flex-col md:gap-12  font-[Roboto]   bg-surface   select-none overflow-hidden ">
      <div>
        {/* <Helmet>
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
        </Helmet> */}
        <Navbar />
        {/* <Routerr /> */}
        <Home />
        <About />
        {/* <Projects /> */}
        <Projects2/>
        <Contact />
        <FooterCopyright />
      
      
      </div>
    </div>
  );
}

export default App
