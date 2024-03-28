import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import Nav from './Nav/Nav'
import Dashbord from './Dashbord/Dashbord';
import Componentus from './componentus/Componentus'
import Uielements from './UiElements/Uielements'
import Widgets from './widgets/Widgets'
function App() {
  return (
    <div>

<BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Dashbord/>}/>
                <Route index element={<Dashbord />} />
                <Route path="Dashbord" element={<Dashbord />} />
                <Route path="Home" element={<Home />} />
                <Route path="Componentus" element={<Componentus />} />
                <Route path="Uielements" element={<Uielements />} />
                <Route path="Widgets" element={<Widgets />} />
                
                
                
            </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App