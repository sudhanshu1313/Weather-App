import { pink } from '@mui/material/colors'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';


import HomeIcon from '@mui/icons-material/Home';
import Groups3Icon from '@mui/icons-material/Groups3';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
export default function Footer() {
  return (
    <>

<div className="container-fluide my-5 mb-0">
      <footer className=" Footer1 text-center text-lg-start text-white">
      
        <div className="container p-4">
         
          <div className="row mt-4">
       
            

            <div className="col-lg-3 my-2 col-md-6 mb-4 mb-md-0">
              <hr></hr>
              <h5 className="text-uppercase" style={{textAlign:'center'}}>About</h5>
              <hr></hr>
              <ul className="list-unstyled mb-0" style={{textAlign:'center'}}>
                {/* <li>
                 
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> 
                  
                </li> */}
                <li>
                 
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>Thank you for choosing 
                  
                </li>
                <li style={{marginTop:'10px'}}>
                 
                <ShoppingBagIcon style={{fontSize:"19px",position:"relative"}}/> S.G. Shopping_Mart :)
                  
                </li>
              </ul>
            </div>

            <div className="col-lg-3 my-2 col-md-6 mb-4 mb-md-0">
            <hr></hr>
              <h5 className="text-uppercase" style={{textAlign:'center'}}>Contact</h5>
              <hr></hr>
              <ul className="list-unstyled mb-0" style={{textAlign:'center'}}>

                <li style={{marginTop:'10px'}}>
                 
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>
                    <PlaceIcon/> Airport Road Nanded - 431605
                  
                </li>
                <li style={{marginTop:'10px'}}>
                 
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> 
                    <EmailIcon/> sgshoppingmart@gmail.com
                  
                </li>
                <li style={{marginTop:'10px'}}>
                 
                    <i className="fas fa-user-edit fa-fw fa-sm me-2"></i>
                    <PhoneIcon/> +91 878836513 , 7219745613
                  
                </li>
                <li>
                 
                    <i className="fas fa-user-edit fa-fw fa-sm me-2"></i>
                  
                </li>
              </ul>
            </div>

            <div className="col-lg-3 my-2 col-md-6 mb-4 mb-md-0">
              <hr></hr>
              <h5 className="text-uppercase" style={{textAlign:'center'}}>Service</h5>
              <hr></hr>
              <ul className="list-unstyled mb-0" style={{textAlign:'center'}}>
                <li style={{marginTop:'10px'}}>
                 
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>
                    <HomeIcon/>  Home
                  
                </li>
                <li style={{marginTop:'10px'}}>
                 
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>
                    <Groups3Icon/>  About Us
                  
                </li>
                <li style={{marginTop:'10px'}}>
                 
                    <i className="fas fa-user-edit fa-fw fa-sm me-2"></i>
                    <LocalGroceryStoreIcon/>  Shop
                  
                </li>
              </ul>
            </div>

            <div className="col-lg-3 my-2 col-md-6 mb-4 mb-md-0">
              <hr></hr>
              <h5 className="text-uppercase" style={{textAlign:'center'}}>Productes</h5>
              <hr></hr>
              <ul className="list-unstyled mb-0" style={{textAlign:'center'}}>
                <li style={{marginTop:'10px'}}>
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Sofa |
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Chair |
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Bed |
                </li>
               
                <li style={{marginTop:'10px'}}>
                    
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Phone |
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Airpods |
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Watch |
                </li>

                <li style={{marginTop:'10px'}}>
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Pet Bed |
                    <i className="fas fa-book fa-fw fa-sm me-2"></i> Floor Lamp |
                </li>
               
              </ul>
            </div>
  
          </div>
          
        </div>

        
        
        <div class="text-center p-4" style={{backgroundColor:'#0b5454'}}>
          <hr></hr>
           |  © 2023 Copyright :  <a style={{fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>  S.G.Shopping_Mart : )  |</a>
           <hr></hr>
        </div>
       
  
      </footer>
    </div>
    
    
    
    
    </>
  )
}
