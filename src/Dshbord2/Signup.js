import React,{useState} from 'react'
import axios from 'axios'
import './app.css'
function Signup() {
    const [data,setData] = useState({})
    const [result,setResult] = useState();
    const signup=(e)=>{
        axios.post("https://shayari-pvwz.onrender.com/signup", data).then(function (response) {
        console.log(response.data)
		setResult("User Added !!!")
       }).catch(function(err){
        setResult("Something Went Wrong !!!")
	   })
    }

  return (
    <div className="app">
    <div className="centerscreen">
        <div>
      <h1>Signup</h1>

    <input type="text" placeholder='Enter Name' onChange={ (e)=>{setData({...data,name:e.target.value})} } />
    <br></br><input type="email" placeholder='Enter Email' onChange={ (e)=>{setData({...data,email:e.target.value})} } />
    <br></br><input type="email" placeholder='Enter Password' onChange={ (e)=>{setData({...data,password:e.target.value})} } />
    <br/>
    <button onClick={(e)=>{signup()}}>Create Account</button>
    <br/>
    {result}
    </div>
    </div></div>
  )
}

export default Signup