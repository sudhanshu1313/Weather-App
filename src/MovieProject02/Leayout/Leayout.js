import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import {  Link } from "react-router-dom";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import  './Leayout.css';
import { useAuth0 } from "@auth0/auth0-react";
import ListIcon from '@mui/icons-material/List';

function Leayout() {
  const { handleSearchChange } = useContext(UserContext);

  const { loginWithRedirect,logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();





  



  return (
    <>
        <nav class="navbar navbar-expand-sm bg-black navbar-dark ">
                <div  class="container-fluid ">
                 

                 
                    <a class="navbar-brand " href="#"> <LiveTvIcon/> </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">

                    <span ><ListIcon/></span>

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
                          <Link  to="/Movies" > Movies </Link>
                        </a>
                        </li>
                        
                    </ul>

                    <form >
                      
                      <input className="form-control "   type="text" onChange={(e)=>{handleSearchChange(e.target.value)}} placeholder="Search Something..!" />
                
                    </form>



                    <span className='LoginName'>
                        {
                            isAuthenticated && <span className='LoginName2' style={{fontSize:'10px',marginLeft:'50px',color:'whitesmoke'}}> Welcome {user.name} . . !</span>
                        }
                    </span>

                    <span>
                        {
                          isAuthenticated
                          ? 
                          <button className='LoginBtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                          :
                          <button className='LoginBtn' onClick={() => loginWithRedirect()}>Login</button>
                        }
                   </span>
                    </div>

                  


                 </div>
        </nav>




    </>
  )
}

export default Leayout