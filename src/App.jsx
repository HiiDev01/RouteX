import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Nav from './component/Nav.jsx'
import Home from './pages/Home.jsx'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
