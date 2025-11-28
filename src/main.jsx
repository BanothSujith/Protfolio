import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 

  <>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </>
)
 const loadFonts = () => {
   const fonts = [
     "Roboto",
     "BitcountSingleInk",
     "Inter",
     "PlayfairDisplay",
     "LibreBaskerville",
     "Exo2",
     "Lato",
     "Momo+Signature",
   ];
   const subsets = "greek,cyrillic";

   fonts.forEach((font) => {
     const link = document.createElement("link");
     link.href = `https://fonts.googleapis.com/css?family=${font}&subset=${subsets}`;
     link.rel = "stylesheet";
     document.head.appendChild(link);
   });
 };

 
 loadFonts();