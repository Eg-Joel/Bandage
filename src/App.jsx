import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header1 from './components/Header1';
import HeaderMain from './components/HeaderMain';
import Home from './pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header1/>
    <HeaderMain/>
      <Routes>
        
      <Route exact path="/" element={<Home />}  />
      
     
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
