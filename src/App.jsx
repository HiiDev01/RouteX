import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Nav from './component/Nav.jsx'
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Vehicle from "./pages/Vehicle.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import OurTeam from "./pages/OurTeam.jsx";
import Testimony from "./pages/Testimony.jsx";


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/testimonial" element={<Testimony />} />
      </Routes>
    </>
  )
}

export default App
