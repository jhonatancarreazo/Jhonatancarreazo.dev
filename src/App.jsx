import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog'
import { BrowserRouter as Router,Route, Routes,Navigate  } from 'react-router-dom';
// import './App.css';

function App() {
    return (
        <Router>
            <>
                <Header />
                <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/sobre-mi" />} />
                    <Route path="/sobre-mi" element={<About />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;
