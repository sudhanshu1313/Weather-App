import React from 'react'
import {  Link } from "react-router-dom";
import './Login.css'
function Login() {
  return (
   <>
      <center>

                <div className='mainContainer2'>


                   <div className='container MainDIV2'>

                          <div className='row mt-4'>
                            
                            <div>
                              <span style={{fontWeight:'bold',fontFamily:'sans-serif'}}>
                                Sign In
                              </span>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='mt-2'>


                              <div>

                                <input type='email'  placeholder='Email'  required/>
                                <br></br>
                                <input type='password' placeholder='Password'   required/>
                                <br></br>
                                <input type='text' placeholder='Put Capation'   required/>
                                <br></br>
                              <br></br>

                            

                              <button className='BTN1'>Sign In</button>
                              </div>
                            </div>
                          </div>
                          <div className='mt-4'>
                            <p  style={{fontFamily:'sans-serif'}}>
                              Don't have an account ?
                                <Link to="/Signup">
                                <b>
                                  <span style={{cursor:'pointer',color:'lblue'}}> Sign Up </span> 
                                </b>
                              </Link>
                      </p>
                      </div>

                </div>


                   
                </div>
</center>
   
   
   </>
  )
}

export default Login