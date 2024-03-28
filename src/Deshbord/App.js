import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebr from './Sidebar/Sidebr'
import Home from './Home/Home'
import Deshbord from './Deshbord/Deshbord';
import Products from './Products/Products';
import Orders from './Orders/Orders'
import Customers from './Customers/Customers'
import Shipping from './Shipping/Shipping'


import Login from './Login/Login'
import Signup from './Signup/Signup'

import Profile from './Profile/Profile'
import Nopage from './Nopage/Nopage'
function App() {
  return (
    <>
           <BrowserRouter>
            <Sidebr/>
            <Home/>
            <Routes>
                <Route path="/" element={<Deshbord/>}/>
                <Route index element={<Deshbord />} />
                <Route path="/Deshbord" element={<Deshbord />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/Customers" element={<Customers />} />
                <Route path="/Shipping" element={<Shipping />} />
               
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="*" element={<Nopage />} />
             

                
            </Routes>
            
       
    </BrowserRouter>


    </>

  )
}

export default App