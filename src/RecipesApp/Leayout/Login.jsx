import React from 'react'

import './Login.css'
function Login() {
  return (
    <>
       <div className="Conatiner">
            <div>
                <h4 style={{color:"white",fontFamily:"Segoe UI', Tahoma, Geneva, Verdana, sans-serifs",fontWeight:"bold"}}>Login  From</h4>
                <form action="http://localhost:2000/create" method="get">
                <input className='INPUT' type="email" name="email" onclick="this.value=''" placeholder="Email" /><br /><br />
                <input  className='INPUT' type="password" name="password" onclick="this.value=''" placeholder="Password" /><br /><br /> 
                <button className='LOGINBTN'><b>Login</b></button>
                </form>
            </div>
      </div>


    </>
  )
}

export default Login