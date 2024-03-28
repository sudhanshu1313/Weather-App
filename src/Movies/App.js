import React from 'react'
import Home from './Home';
import Movies from './Movies.js';


import Nopage from './Nopage'


import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
 
  return (
    <>  
     <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Movies" element={<Movies />} />
                <Route path="*" element={<Nopage />} />
                
            </Routes>
    </BrowserRouter>

    
    
    </>
  )
}

export default App