import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About/>}></Route>



      </Routes>
    </>          
  )
}

export default App
