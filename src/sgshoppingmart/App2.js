import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leyout from './Leyout';
import Home from './Home'
import Shop from './Shop'
import ProductDatil from './ProductDatil';
import About from './About'
import Addcard from './Addcard';
import Login from './Login';
import Nopage from './Nopage'
import Footer from './Footer';



function App2() {
  return (
    <>

        {/* <Home/>
        <Shop/>
        <Card/>
        <Nopage/> */}

        <BrowserRouter>
            <Leyout/>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Shop" element={<Shop />} />
                <Route path="Shop/:id" element={<ProductDatil />} />

                <Route path="About" element={<About />} />
                <Route path="Addcard" element={<Addcard />} />
                <Route path="Login" element={<Login />} />
                <Route path="*" element={<Nopage />} />

            </Routes>
            <Footer/>
        </BrowserRouter>
    
    
    </>
  )
}

export default App2