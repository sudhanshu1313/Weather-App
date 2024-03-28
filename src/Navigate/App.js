
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './Home/Home'
function App() {
  return (
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route index element={<Deshbord />} />
                <Route path="/Deshbord" element={<Deshbord />} />
            </Routes>

        </BrowserRouter>



    </>
  )
}

export default App