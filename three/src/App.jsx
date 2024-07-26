// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/home";
import About from "./website/about";
import Services from "./website/services";


function App() {
  return (
    <>
        <h3>Welcome!!!</h3>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App
