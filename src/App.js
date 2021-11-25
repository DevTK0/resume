import logo from './logo.svg';
import './App.css';

import Header from './Sections/Header';
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Projects from './Sections/Projects';
import Certifications from './Sections/Certifications';

function App() {
  return (
    <div class="max-w-2xl mx-auto">
      <Header/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Certifications/>
    </div>
  );
}

export default App;
