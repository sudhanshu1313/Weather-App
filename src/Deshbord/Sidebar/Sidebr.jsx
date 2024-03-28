import React from 'react'
import {  Link } from "react-router-dom";
import './Sidebr.css'
import sudhanshu from '../images/sudhanshu.jpeg'

function Sidebr() {
  return (
    <div className='container-fluide Main'>
      <div className="row">

      
      <div className="items">
          
            <div>

               
                 <span className='Name'>  Company  Name</span>
               
            </div>
          

          <div className='user-img'>
            <img src={sudhanshu} alt="me" />
          </div>

          <div className='headding'>
            <span>Sudhanshu Gaikwad</span>
            <br></br>
            <span>Admin</span>
          </div>
        
          <div className='ItmesName'>
          
               

                  <li>
                    
                          {/* <i class="bx bx-cog ICons"></i> */}
                          <span>
                            <Link to="/Deshbord"> <b>Deshbord</b></Link> 
                          </span>
                          
                    
                  </li>

                  <li>
                      
                        {/* <i class="bx bxs-shopping-bag ICons"></i> */}
                        <span className='IName'>
                          <Link to="/Products"><b>Products</b></Link>
                        </span>
                      
                  </li>

                  <li>
                      
                          {/* <i class="bx bxs-food-menu ICons"></i> */}
                          <span>
                          <Link to="/Orders"><b>Orders</b></Link>
                          </span>
                      
                  </li>
                  <li>
                    
                          {/* <i class="bx bx-body ICons ICons"></i> */}
                          <span>
                            <Link to="/Customers"><b>Customers</b></Link>
                          </span>
                      
                  </li>
                  <li>
                      
                      {/* <i class="bx bx-location-plus ICons"></i> */}
                          <span>
                            <Link to="/Shipping"><b>Shipping</b></Link>
                          </span>
                      
                  </li>
                  

                        
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebr