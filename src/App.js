import './App.css';

import Header from './Sections/Header';
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Projects from './Sections/Projects';
import Certifications from './Sections/Certifications';
import Footer from './Sections/Footer';

function App() {
  return (
    <div class="max-w-2xl sm:mx-auto mx-10">
      <Header/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Certifications/>
      <Footer/>
    </div>
  );
}

export default App;
