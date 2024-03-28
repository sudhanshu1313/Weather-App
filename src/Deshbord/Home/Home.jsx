import React from 'react'
import './Home.css'
import {  Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Home() {
  return (
    <>
        
        <div className="container Rightbar">

            <div className="row">
                <div className="Items">

                    <nav className="navbar navbar-expand-sm NAVBAR">
                        <div className="container-fluid">
                            
                            
                            <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                               
                              

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                   
                                    <div class="dropdown">
                                        
                                        <span class="dropbtn"> 
                                         <AccountCircleIcon/>
                                        </span>
                                        
                                        <div class="dropdown-content">
                                            <a href="#"><Link  to="/Login"> Sign in </Link></a>
                                            <a href="#"><Link  to="/Signup"> Sign Up</Link></a>
                                            <a href="#"><Link to="/Profile">Profile</Link></a>
                                            
                                           
                                        </div>
                                    </div>
                                    
                                    </a>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                    </nav>


                </div>
            </div>
        </div>


    </>
  )
}

export default Home