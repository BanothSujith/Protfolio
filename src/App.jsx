// import Routerr from './Routers/index.jsx'
import Navbar from './Navbar/index.jsx'
import './index.css'
import { Helmet } from "react-helmet";
import About from './pages/About.jsx';
// import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import FooterCopyright from './components/FooterCopyright.jsx';
import Home from './pages/Home.jsx';
import Projects2 from './pages/Projects2.jsx';
import { useSelector } from 'react-redux';
import JsonLdSchema from './components/JsonLdSchema.jsx';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const domainUrl = "https://banothsujith.vercel.app/";
  const developerName = "Banoth Sujith";

 
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
  const theme  = useSelector((state) => state.storeSlice.themeType);
  if(theme === 'dark'){
    document.getElementsByTagName('body')[0].className='dark';
  }else{
    document.getElementsByTagName('body')[0].className='bright';
  }
  document.documentElement.className=theme;


  useEffect(()=>{
    async () =>{
          const res = await axios.get(import.meta.env.VITE_SERVER);
          console.log(res);
        }
  },[])
  return (
    <div className=" relative w-full h-full bg-fixed flex   flex-col md:gap-12  font-[Roboto]   bg-surface   select-none overflow-hidden ">
      <div>
        <Helmet>
          <JsonLdSchema schemaData={combinedSchema} />
          <title>{developerName} | Full-Stack Developer</title>
        </Helmet>
        <Navbar />
        {/* <Routerr /> */}
        <Home />
        <About />
        {/* <Projects /> */}
        <Projects2 />
        <Contact />
        <FooterCopyright />
      </div>
    </div>
  );
}

export default App
