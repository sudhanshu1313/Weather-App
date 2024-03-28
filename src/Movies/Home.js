import React, { useState,useEffect } from 'react'
import {  Link } from "react-router-dom";



import Data from'./Data.json'
import './Style.css'


// material icons links
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LiveTvIcon from '@mui/icons-material/LiveTv';




import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';



  import { useAuth0 } from "@auth0/auth0-react";





function Home() {
  const { loginWithRedirect,logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const [comedy,setComedy]= useState(Data)
  const [Horror,setHorror]= useState(Data)
  const [Action,setAction]= useState(Data)

  
  // this is usestate use fro Comedy
  useEffect(()=>{
    let newData1 = Data.filter((value)=>value.Category === "comedy")
    setComedy(newData1)

  // this is usestate use  Horrror
    let newData2 = Data.filter((value)=>value.Category === "Horror")
    setHorror(newData2)
    // this is usestate use fro CAction
    let newData3 = Data.filter((value)=>value.Category === "Action")
    setAction(newData3)
   

  
  
  },[])





  // all moves buttons 
  const [newdata,setData] = useState(Data)

  const setLanguage =(val)=>{
    
    let FilterDta = Data.filter((value)=>value.Language === val)
   
    setData(FilterDta)
  }

  const All=()=>{
    setData(Data)
  }



return (

      <>
       

      <div className='main md-6 lg-6 xl-6 xl-4'>

        <div className='Saidebar'>
          <div>
             <Link to="Search">
                 <input type="text" placeholder="Search.." className='Input'></input>
             </Link>
          </div>
          <div>
            <Link  to="/" className='Box1'><HomeIcon/> Home </Link>
          </div>
          <div><Link to="/Movies" className='Box1'> <LiveTvIcon/>  Movies</Link></div>
         
          <div>
          
          <span className='LOGIN'>
              {
                  isAuthenticated && <span style={{fontSize:'10px',marginLeft:'50px',color:'whitesmoke'}}> {user.name}</span>
              }
          </span>

         <span style={{marginLeft:"50px",marginTop:"-6px"}}>
              {
                isAuthenticated
                 ? 
                 <button className='btn btn btn-outline-light'  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><b><LogoutIcon/> Log Out</b></button>
                 :
                <button className='btn btn btn-outline-light'  onClick={() => loginWithRedirect()}><span > <LoginIcon/> Log In</span></button>
              }
          </span>
          
          </div>
         
        </div>




         <div className='container-fluide'>

            <div className='row '>

            </div>

            <div className='row md-6 lg-6 xl-6 xl-4' style={{marginLeft:"210px"}}>


                              
              

               






            </div>


            <div className='row mt-2 sm md-6 lg-6 xl-6 xl-4 'style={{marginLeft:"200px"}}>

              <div className='row'>
                 
                 <div className='col-5 mx-3 md-6 lg-6 xl-6 xl-4'>

                    
                    


                 </div>

                 <div className='col-7 mt-1 mb-1'>
                      
             
                 </div>

              </div>



              <h3 style={{marginLeft:"20px",color:"rgb(253, 10, 107)",padding:"10px",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}><b><TheaterComedyIcon/> Comedy</b></h3>
              {
                comedy.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards" style={{width: "300px"}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title"><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Language}</b></p>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Category}</b></p>
                        <p tyle={{lineHeight:"0.3"}} class="text-justify">{value.About}</p>
                        <button className='btn btn-outline-danger btn-sm'>Show Movies</button>
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }




              <h3 style={{marginLeft:"20px",color:"rgb(253, 10, 107)",padding:"10px",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}><b><SmartButtonIcon/> Horror</b></h3>
              {
                Horror.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards" style={{width: "300px"}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title"><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Language}</b></p>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Category}</b></p>
                        <p tyle={{lineHeight:"0.3"}} class="text-justify">{value.About}</p>
                        <button className='btn btn-outline-danger btn-sm'>Show Movies</button>
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }



              <h3 style={{marginLeft:"20px",color:"rgb(253, 10, 107)",padding:"10px",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}><b><AddReactionIcon/> Action</b></h3>
              {
                Action.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards" style={{width: "300px"}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title"><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Language}</b></p>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Category}</b></p>
                        <p tyle={{lineHeight:"0.3"}} class="text-justify">{value.About}</p>
                        <button className='btn btn-outline-danger btn-sm'>Show Movies</button>
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }


 
                 
            </div> 


        </div>

     
       
      </div>
    
        
        

      </>






    
  

  )
}

export default Home