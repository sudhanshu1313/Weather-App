import React,{useContext} from 'react'
import { UserContext } from '../App';

import {Link} from 'react-router-dom'
import './Leayout.css';

// import AcUnitIcon from '@mui/icons-material/AcUnit';
import FitbitIcon from '@mui/icons-material/Fitbit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Leayout() {

    // heare we have tack cart leangth
    const {cart} = useContext(UserContext);
  return (
    <>
    <div className='Navbar'>
        <nav class="navbar navbar-expand-sm  navbar-dark">
                <div class="container-fluid">
                    
                    <a class="navbar-brand" href="#"><FitbitIcon  style={{color:'whitesmoke',marginTop:'-7px',fontSize:'30px'}}/></a>
                    <span className='CompanyName'>S.G.Shopping Store</span>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class=""><KeyboardArrowDownIcon style={{fontSize:"25px"}}/></span>
                    </button>
                    <div class=" collapse navbar-collapse mx-5" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <Link to="Home">Home </Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <Link to="About">About </Link>
                                </a>
                            </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                    <Link to="Cart"> Cart ( {cart.length} )</Link>                                                       
                                    </a>
                                </li>
                            
                        </ul>
                    </div>
                </div>
        </nav>
        </div>



    </>
  )
}

export default Leayout