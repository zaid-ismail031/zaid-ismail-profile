import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectCarousel from './components/ProjectCarousel';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/projects' element = {<ProjectCarousel />} />
          <Route path = '/resume' element = {<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
