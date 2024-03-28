import React,{useState,createContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import Menu from './Menu'
import Signup from './Signup'
import Login from './Login'
import Create from './Create';
import Read from './Read';
import Logout from './Logout';
import './app.css'

export const shayariContext = createContext()

function App() {

  const [isLogin,setLogin1] = useState(false)
  const [userid,setUser1] = useState(false)
  const setLogin=(val)=>{
    setLogin1(val)
  }

  const setUser=(val)=>{
    setUser1(val)
  }



  return (
    <shayariContext.Provider value={{isLogin,setLogin,setUser,userid}}>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Signup />}/>
        <Route index element={<Signup />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="Create" element={<Create />} />
        <Route path="read" element={<Read />} />
        <Route path="logout" element={<Logout />} />
    </Routes>
  </BrowserRouter>
      </shayariContext.Provider>
  )
}

export default App