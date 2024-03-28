import React from 'react'
import {  Link } from "react-router-dom";

import { FcHome } from "react-icons/fc";
import { FcClapperboard } from "react-icons/fc";
import { FcFilm } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
function Webseries() {
  return (
    <div className='main'>

                <div className='Saidebar'>
                        <div>
                            <Link to="Search">
                                <input type="text" placeholder="Search.." className='Input'></input>
                            </Link>
                        </div>
                        <div><Link to="/" className='Box1'><FcHome/> Home</Link></div>
                        <div><Link to="/Movies" className='Box1'><FcClapperboard/> Movies</Link></div>
                        {/* <div><Link to="/Webseries" className='Box1'><FcFilm/> Webseries</Link></div> */}
                        <div><Link to="/Sport" className='Box1'><FcSportsMode/> Sport</Link></div>
                        <div><Link to="/Login" className='Box1'><FcBusinessman/> Login</Link></div>
                        <div><Link to="/Signin" className='Box1'><FcConferenceCall/> Signin</Link></div>
                </div>

         <div className='container mt-3'>

         <div className='row'>
              <center className='text-danger' style={{padding:"5px"}}><h5><b>This is Webseries Page...!</b></h5></center>
          </div>



            <div className='row'>

              <div className='MButtons'>
                <div><button className='btn btn-outline-danger'>Hindi</button></div>
                <div><button className='btn btn-outline-danger'>English</button></div> 
                <div><button className='btn btn-outline-danger'>Marathi</button></div>
                <div><button className='btn btn-outline-danger'>Telagu</button></div>
                <div><button className='btn btn-outline-danger'>Kannad</button></div>
              </div>

            </div>

            <div className='row mt-3'>

              <div className=''>

                All Catagiries Webseries are available to heare

              </div>

            </div>
        </div>
            
    </div>
  )
}

export default Webseries