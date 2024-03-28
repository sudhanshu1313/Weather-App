import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Leayout from './Leayout/Leayout'
import Home from './Home/Home'
import About from './About/About'
import Login from './Leayout/Login'
import Ragitration from './Leayout/Ragitration'
import ProductsDaitail from './ProductsDitail/ProductsDitail'
import Footer from './Footer/Footer';
import Nopage from './Nopage/Nopage';




function App() {
  return (
    <>

    <BrowserRouter>
            <Leayout/>
           
            <Footer/>

    </BrowserRouter>

    </>
  )
}

export default App