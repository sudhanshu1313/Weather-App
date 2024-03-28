import React from 'react'
import './Nav.css'
import {  Link } from "react-router-dom";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SpeedIcon from '@mui/icons-material/Speed';
import LaptopIcon from '@mui/icons-material/Laptop';

import AppsIcon from '@mui/icons-material/Apps';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
function Nav() {
  return (
    <>

        <div className='container-fluid Main'>
            
            <div className='row'>
                <div className='Saidebar'>
                    
                    <div className=''>
                    <Link to="/Home" className='NavItems'>
                       <EqualizerIcon style={{fontSize:'60px',marginTop:'-30px',color:'gray'}}/> <span style={{color:'gray',fontSize:'30px'}}>GLANC</span>
                       <br></br> <span style={{marginLeft:'40px',color:'gray'}}>Desing Deashboard</span>
                       </Link>
                    </div>
                    <div className='DIV'>
                         <Link to="/Dashbord" className='NavItems'><a> <SpeedIcon/> Dashbord</a></Link>
                    </div>
                    <div className='DIV'>
                         <Link to="/Componentus" className='NavItems'><a><LaptopIcon/> Componentus</a></Link>
                    </div>
                   
                    <div className='DIV'>
                         <Link to="/Uielements" className='NavItems'><a> <LaptopIcon/> Ui Elements</a></Link>
                    </div>

                    <div className='DIV'>
                         <Link to="/Widgets" className='NavItems'><a><AppsIcon/> Widgets</a></Link>
                    </div> 

                    <div className='DIV'>
                         <Link to="/Forms" className='NavItems'><a><NoteAltIcon/> Forms</a></Link>
                    </div>

                    <div className='DIV'>
                         <Link to="/Tables" className='NavItems'><a>Tables</a></Link>
                    </div>
                    <div className='DIV'>
                         <Link to="/Mailbox" className='NavItems'><a>Mailbox</a></Link>
                    </div>
                    <div className='DIV'>
                         <Link to="/Examples" className='NavItems'><a>Examples</a></Link>
                    </div>  
                       
                </div>
            </div>
        </div>

           

            



    </>
  )
}

export default Nav