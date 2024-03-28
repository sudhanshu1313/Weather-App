import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { shayariContext } from './App'

function Menu() {
  const {isLogin,setLogin} = useContext(shayariContext)

  return (
    <div className="nav">


    
      {
      isLogin?<>
      <Link to="/logout">Logout</Link>
      <Link to="/create">Create</Link>
      <Link to="/read">Read</Link></>
      :<>
      <Link to="/signup">Signup</Link>
    <Link to="/signin">Signin</Link></>
    }
    </div>
  )
}

export default Menu