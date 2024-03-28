import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leayout from './Leayout';

import Home from './Home';
import Productes from './Productes';
import Contact from './Contact';
import Logout from './Logout';
import Footer from './Footer';
import Nopage from './Nopage';
function App1() {
  return (
    <>

        
<BrowserRouter>
            <Leayout/>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Productes" element={<Productes />} />
                <Route path="Contact" element={<Contact />} />

                <Route path="Logout" element={<Logout />} />
                
                <Route path="*" element={<Nopage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    
    
    </>




  )
}
export default App1