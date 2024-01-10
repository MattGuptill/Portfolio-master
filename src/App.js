
import './App.css';
import { Header } from './Components/Header/header'
import {About} from './Components/About/about';
import { Portfolio } from './Components/Portfolio/portfolio';
import { Resume } from './Components/Resume/resume';
import { Contact } from './Components/Contact/contact';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
   
    <div>
      <Header />
    <Routes path="/">
      <Route index element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </div>
    

  );
}

export default App;
