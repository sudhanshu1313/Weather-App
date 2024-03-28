import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import Data from'./Data.json'

// material icons links










function Movies() {

  const [newdata,setData] = useState(Data)

  const setLanguage =(val)=>{
    
    let FilterDta = Data.filter((value)=>value.Language === val)
   
    setData(FilterDta)
  }


  


  const All=()=>{
    setData(Data)
  }




   
 


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
              
            
      </div>


        <div className='container-fluide mt-3'>


            <div className='row'style={{marginLeft: "250px;"}}>

              <div className='MButtons'>

                <div><button className='btn btn-outline-info btn-sm mx-2' onClick={()=>{All()}}>All Movies</button></div>
                <div><button className='btn btn-outline-info btn-sm mx-2' onClick={()=>{ setLanguage("Webseries")}}>Webseries</button></div>
                <div><button className='btn btn-outline-danger btn-sm mx-2' onClick={()=>{ setLanguage("Hindi")}}>Hindi</button></div>
                <div><button className='btn btn-outline-danger btn-sm mx-2'onClick={()=>{ setLanguage("English")}}>English</button></div> 
                <div><button className='btn btn-outline-danger btn-sm mx-2'onClick={()=>{ setLanguage("Marathi")}}>Marathi</button></div>
                <div><button className='btn btn-outline-danger btn-sm mx-2'onClick={()=>{ setLanguage("Telagu")}}>Telagu</button></div>
                <div><button className='btn btn-outline-danger btn-sm mx-2' onClick={()=>{ setLanguage("Kannad")}}>Kannad</button></div>
                <div><button className='btn btn-outline-danger btn-sm mx-2' onClick={()=>{ setLanguage("Tamil")}}>Tamil</button></div>
              
                
              </div>

              

            </div>

            <div className='row mt-3'>

              

              <div className='row mt-2 sm' style={{marginLeft:"200px"}}>

              {
                 newdata.map((value,index)=>{
                 
                  return(
                      
       
                    <div class="card Cards" style={{width: "300px"}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title"><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"royalblue"}} className="text-justify"><b>{value.Language}</b></p>
                        <p tyle={{lineHeight:"0.3"}} class="text-justify">{value.About}</p>
                        <button className='btn btn-outline-danger btn-sm'>Show Movies</button>
                      </div>
                    </div>
                  
             
                  

                    )
                })
              }
                </div> 

              

            </div>
        </div>

        
         
        

       
    

    </div>
  )
}

export default Movies