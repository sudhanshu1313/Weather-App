import React, { useState } from 'react'
import  './CssFile/From.css'
import { useNavigate } from 'react-router-dom';
function Home() {


  const [email,SetEmail] = useState (" ");
  const [pass,setPass] = useState(" ");

  const [dataInput,setDataInput] = useState ("");
  const data = [{username:"sudhanshu",password:"12345"},{username:"anuj",password:"12345"}];

  const navigate = useNavigate ();
  let result = '12';
  const submiteThis = (e) =>{
    e.preventDefault ();
    result = data.find ( (user) => user.username == email && user.password == pass)
    if(result){
      console.log(result);
      navigate("/Productes")
      localStorage.setItem("username",email);
    }else{
      alert("Worng username and password..!");
      console.log("Worng username and password..!");
    }
  }


  return (
    <>

      
          <form action=" " className='From' onSubmit={submiteThis} >
            
            <input style={{padding:'5px'}} type='trxt' placeholder='Username' onChange={ (e)=>SetEmail(e.target.value) }/>
            <br></br>
            <br></br>
            <input style={{padding:'5px'}} type='password' placeholder='Password' onChange={ (e)=>setPass(e.target.value) }/>
            <br></br>
            <br></br>
            <button className='btn btn-outline-primary'>Login</button>

          </form>

    

    </>
  )
}

export default Home