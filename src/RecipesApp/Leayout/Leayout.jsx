import React from 'react'
import {  Link } from "react-router-dom";

// Icons 
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Css file
import './Leayout.css'

function Leayout() {



  return (
    <div>
        <nav class="navbar navbar-expand-sm  navbar-dark  MainNav">
                <div  class="container-fluid ">
                 

                 
                    <a class="navbar-brand " href="#"> <Link  to="/About"> <OutdoorGrillIcon style={{fontSize:"40px",marginTop:"-5px"}}/>  Recipes </Link></a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">

                    <span ><KeyboardDoubleArrowDownIcon /></span>

                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <Link  to="/" >Home </Link>
                          </a>
                    
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <Link  to="/About" > About </Link>
                          </a>
                        </li>

                        
                    </ul>  
                    <form >
                    
                      <input className="form-control "   type="text"  placeholder="Search Food..!"></input>
          
                    </form>

                    <div className='LOGINICON'>
                      <ul>
                        
                        <li class="nav-item" style={{listStyle:"none"}}>
                          <a class="nav-link" href="#">
                            
                           
                            <div class="dropdown">
                                  <button class="dropbtn"> <AccountCircleIcon/>  </button>
                                  <div class="dropdown-content">
                                    <a href="#"><Link  to="/Login"> Login </Link></a>
                                    <a href="#"><Link  to="/Ragitration"> Ragitration</Link></a>
                                  </div>
                            </div>
                            
                           
                          </a>
                        </li>  
                      </ul>  
                    </div>                
                    </div>
                 </div>
        </nav>

    </div>
  )
}

export default Leayout