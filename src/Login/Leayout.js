import React from 'react'
import './CssFile/Leayout.css'
import { Link } from "react-router-dom";

function Leayout() {
  return (
    <>


      



        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://www.w3schools.com/bootstrap5/img_avatar1.png" width="40px" class="rounded-pill" />
                </a>
                {/* <span style={{color:'whitesmoke'}}>Compny Name</span> */}

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <Link  className='link_item' to="/">Home</Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="#">
                                    <Link  className='link_item' to="/Productes">Productes</Link>
                                 </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <Link  className='link_item' to="/Contact">Contact</Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                     <Link  className='link_item' to="/Logout">Logout</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>


    </>
  )
}

export default Leayout