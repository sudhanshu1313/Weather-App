import React,{useState,useContext} from 'react'
import axios from 'axios'
import './app.css'
import { shayariContext } from './App'
function Login() {
    const [data,setData] = useState({})
    const [result,setResult] = useState();
    const {setLogin,setUser} = useContext(shayariContext)
    const signin=(e)=>{
        axios.post("https://shayari-pvwz.onrender.com/signin", data).then(function (response) {
        console.log(response.data)
        setLogin(true)
        setUser(response.data.user._id)
        console.log("id:   "+response.data.user._id)
		setResult("User Login!!!")
       }).catch(function(err){
        setResult("Something Went Wrong !!!")
	   })
    }

  return (
    <div className="app">
    <div className="centerscreen">
        <div>
      <h1>Login</h1>

   
    <br></br><input type="email" placeholder='Enter Email' onChange={ (e)=>{setData({...data,email:e.target.value})} } />
    <br></br><input type="password" placeholder='Enter Password' onChange={ (e)=>{setData({...data,password:e.target.value})} } />
    <br/>
    <button onClick={(e)=>{signin()}}>Login</button>
    <br/>
    {result}
    </div>
    </div></div>
  )
}

export default Login