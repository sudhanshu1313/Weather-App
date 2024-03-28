import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import ProductsDitail from '../ProductsDitail/ProductsDitail';


import './Home.css'
function Home() {
// This teack data from recipesSlice
  const NewData = useSelector((state)=>state.Recipesitem)
// 

const Dispatch = useDispatch()


  return (
    <>

      <div className='container MainDIV'> 

        <div className='row'>
              <center>
               <marquee width="60%" direction="down" height="60px" >
               <center>
                 <span className='WELCOME'>Welcome To  Recipes Website</span>
                </center>
                </marquee>
              </center>
        </div>

        <div className='row mt-5'>

          <div className='BTN'>

               

               
              <div className=' mx-1 Country' >
                <select class="form-select form-select-sm" style={{ marginTop:"10px", backgroundColor:"#581845",color:"white",padding:"9px",boxShadow: "3px 3px 3px rgb(154, 151, 151)"}} aria-label=".form-select-sm example HeadingBTN">
                  <option selected>Select Country</option>
                  <option value="1">Indian Food</option>
                  <option value="2">USA Food</option>
                  <option value="3">Russian Food</option>
                  <option value="4">Thailand Food</option>
                  <option value="5">Maldives Food</option>
                  <option value="6">Iceland Food</option>
                </select>
              </div>
                  
              <div>
                <button className='HeadingBTN'><b>All Food</b></button>
              </div>
              <div>
                <button className='HeadingBTN'><b>Vag Food</b></button>
              </div>
                
              <div>
                <button className='HeadingBTN'><b>Nonvag Food</b></button>
              </div>
              <div>
                <button className='HeadingBTN'><b>Breakfast  Food</b></button>
              </div>
              <div>
                <button className='HeadingBTN'><b>Lunch Food</b></button>
              </div>
              <div>
                <button className='HeadingBTN'><b>Dinner Food</b></button>
              </div>
              
          </div>
          
          
        </div>

      </div>


      <div className='container mt-3'>



      
      
     {
               NewData.map((value)=>{
                  return(
                    <>
                   


                  
                      <div className='HomeCart'>
                     
                          <div className="container bcontent">
                              <div className="card CART" style={{width: 350}}>
                                <div className="row no-gutters">
                                  <div className="col-sm-5">
                                    <img className="card-img " style={{padding:"5px",width:"150px"}} src={value.image}  alt="Suresh Dasari Card"/>
                                  </div>
                                  <div className="col-sm-7 ">
                                    <div className="card-body">
                                      <hr></hr>
                                        <th className="card-title" style={{color:"#581845"}}>{value.foodname}</th>
                                        <p className="card-text" style={{lineHeight:"0.3",color:"#581845",marginLeft:"-100px"}}>{value.prise}</p>
                                        <hr></hr>
                                        <button className='btn-sm ItmsBTN'><b>See Resipe</b></button>
                                      <hr></hr>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                        </div>
                       

                    </>
                  )
                })
             
             }
    
    </div>
    
    </>
  )
}

export default Home