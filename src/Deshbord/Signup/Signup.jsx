import React from 'react'
import {  Link } from "react-router-dom";
import './Signup.css'

function Signup() {
  return (
    <>
     <center>

        <div className='mainContainer2'>


          <div className='container MainDIV3'>

                  <div className='row mt-3'>
                    
                    <div>
                      <span style={{fontWeight:'bold',fontFamily:'sans-serif'}}>
                          Sign Up
                      </span>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='mt-2'>


                      <div>
                        <input type='text' placeholder='Full Name'   required/>
                          <br></br>
                        <input type='email'  placeholder='Email'  required/> 
                          <br></br>
                          <input type='text'  placeholder='Mobile Number'  required/> 
                          <br></br>
                        <input type='password' placeholder='Password'   required/>
                          <br></br>
                          <br></br>

                    

                      <button className='BTN1'>Sign Up</button>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p  style={{fontFamily:'sans-serif'}}>
                      Don't have an account ?
                        <Link to="/Login">
                        <b>
                          <span style={{cursor:'pointer',color:'lblue'}}> Sign In </span> 
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

export default Signup