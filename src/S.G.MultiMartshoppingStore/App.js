import React,{createContext,useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leayout from './Letout/Leayout';

import Home from './Home/Home';
import About from './About/About';
import Cart from './Cart/Cart';
import Data from './Data.json';
import { useEffect } from 'react';

export const UserContext = createContext()


function App() {

    // It is use fro show all productes on console screen
    const [Productes,setProductes] = useState(Data)
    useEffect(()=>{
        let sofaProductes = Data.filter((value)=> value.Category === "sofa")
        setProductes(sofaProductes)
    })

    const [Producteschair,setProductesChair] = useState(Data)
    useEffect(()=>{
        let sofaProductechir = Data.filter((value)=> value.Category === "chair")
        setProductesChair(sofaProductechir)
    })

    // It is use for any productes add To cart 
    const [cart,setCart] = useState([]);
        const addToCart=(item)=>{
        setCart([...cart,item])
    }

    const removeFromCart=(item)=>{

        const Rcart = cart.filter((val)=> val.id !== item.id)
        setCart(Rcart)
    
    }

  return (
    <>

    <UserContext.Provider value={{Productes,Producteschair,addToCart,removeFromCart,cart}}> 
        <BrowserRouter>
            <Leayout/>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Cart" element={<Cart />}/>
               
                </Routes>

        </BrowserRouter>
    </UserContext.Provider>


    </>
  )
}

export default App