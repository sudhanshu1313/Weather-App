import React,{useState} from 'react'
import {  Link } from "react-router-dom";


// material icons links
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import LoginIcon from '@mui/icons-material/Login';


function Nopage() {

  return (
    <div className='main'>
        <div className='Saidebar'>
                <div>
                    <Link to="Search">
                        <input type="text" placeholder="Search.." className='Input'></input>
                    </Link>
                </div>
                <div><Link to="/" className='Box1'><HomeIcon/> Home</Link></div>
                <div><Link to="/Movies" className='Box1'><TheatersIcon/> Movies</Link></div>
             
                <div><Link to="/Sport" className='Box1'><SportsVolleyballIcon/> Sport</Link></div>
                <div><Link to="/Login" className='Box1'><LoginIcon/> Login</Link></div>
                
        </div>


          <div className='container' style={{marginLeft:"200px"}}>

           <div className='row'>
                <img style={{marginLeft:"100px",marginTop:"100px"}} src='https://cdn.optinmonster.com/wp-content/uploads/2021/07/404-page-examples-fb-image.png' width="200px" height="450px"></img>
            </div> 




          


          </div>
  </div>
  )
}

export default Nopage