import React from 'react';
import { Link, Routes, Navigate, Route } from 'react-router-dom';
import './App.scss';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="Navbar">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/Home"></Navigate>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
