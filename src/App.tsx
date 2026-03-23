import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './pages/NavBar'; 
import EventFeedback from './pages/EventFeedback';
import Contact from './pages/Contact';
import Services from './pages/Services';
import BookRequest
 from './pages/BookRequest';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
