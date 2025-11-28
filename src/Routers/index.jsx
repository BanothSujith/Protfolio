import {Routes, Route} from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Projects from '../pages/Projects'
function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/portfolio" element={<h1>Portfolio Page</h1>} />
      <Route path="/blog" element={<h1>Blog Page</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default index