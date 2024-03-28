import React,{useEffect,useContext} from 'react'
import { shayariContext } from './App'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Logout() {
    const {isLogin,setLogin} = useContext(shayariContext)
    const navigate = useNavigate();
    useEffect(()=>{

setLogin(false)
navigate('/signin')
    })
  return (
    <div>Logout</div>
  )
}

export default Logout