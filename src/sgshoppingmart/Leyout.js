import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import './Style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth0 } from "@auth0/auth0-react";
// icons in navigation bar

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";



function Leyout() {
  const { loginWithRedirect,logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  return (
   <>

        <div className='conatiner-fluide'>
        <div className="application">
            <Helmet>
                <title> E - Commerce Website  : ) </title>
            </Helmet>
          
        </div>

            <div className='row'>

                  <div  className='Main_nav_bar'>
                      <Navbar expand="sm" variant="dark">
                        <div>
                            <Navbar.Brand>
                                <div className='Rightside'>
                                  <p className='Nameofcompny'> <ShoppingBagIcon  style={{color:'whitesmoke',marginTop:'-7px'}}/>  S.G.Shopping_Mart : ) </p>
                                </div>
                            </Navbar.Brand>
                        </div>
                  
                            <Navbar.Toggle  aria-controls="collapsibleNavbar"/>
                            <Navbar.Collapse id="collapsibleNavbar">
                              <Nav className="mr-auto">

                          <div>
                                <Nav.Link>
                                  <div style={{marginTop:"20px"}}>
                                    <Link  className='link_item' to="/">Home</Link>
                                    <Link  className='link_item' to="/About">About Us</Link>
                                    <Link  className='link_item' to="/Shop">Shop</Link>
                                    
                                  </div>
                                </Nav.Link>
                          </div>


                          <div>
                                <Nav.Link>
                                  <div className=''>
                                    <Link style={{position:"relative",top:"20px"}} className='link_item ' to="/Addcard"> Cart ( 0 ) </Link> 



                                    <div className='LOGIN'>
                                    <span style={{marginLeft:"50px"}}>
                                    {
                                        isAuthenticated && <b>Welcome..! {user.name}</b>
                                    }
                                    </span>

                                    <span style={{marginLeft:"50px",marginTop:"-6px"}}>
                                    {
                                      isAuthenticated
                                       ? 
                                       <button className='btn btn btn-outline-light'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><b>Log Out</b></button>
                                       :
                                      <button className='btn btn btn-outline-light'  onClick={() => loginWithRedirect()}><b>Log In</b></button>
                                    }
                                    </span>
                                    
                                    </div>
                                    
                                  </div>
                                </Nav.Link>
                          </div>
                              
                              </Nav>
                            </Navbar.Collapse>
                      </Navbar>
                  </div>
            </div>

            


        </div>

        
      
  

   
   </>
  )
}

export default Leyout