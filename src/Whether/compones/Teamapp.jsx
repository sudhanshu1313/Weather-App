import React from 'react'
import './style.css'
import { useState } from 'react'
import axios from "axios";

function Teamapp() {

    const [data ,setData] = useState({
        celcius:10,
        name:'Pune',
        humidity:10,
        speed:2


    })

    const [name,setName] = useState('');

    const handeleClick =()=>{

        if(name !== ""){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c4b809212a07f2a5a0c3b3d8ddb39c53&&units=metric`
            axios.get(apiUrl)
            .then(res=>{
                // console.log(res.data);
                setData({...data, celcius:res.data.main.temp,name:res.data.name,
                    humidity:res.data.main.humidity, speed:res.data.wind.speed})
            })
            .catch(err=> console.log(err))
        }
    }
  

  return (
    <>
        <div className='box'>
            <center>

                <span style={{fontWeight:'bolder',fontFamily:'sans-serif',color:'white',position:'relative',top:'10px'}}>Weather System</span>
           
                <div className='inputData'>
                    <input type="search" placeholder='Enter City Name'
                     onChange={(e)=>setName(e.target.value)} />
                    <button className='SearchBTN' onClick={handeleClick}>
                      {/* <box-icon name='search-alt-2' sty></box-icon> */}
                      <i class="bx bx-search-alt-2" style={{fontSize:'30px',color:'white'}}></i>
                      
                    </button>
                    
                </div>
            
                <div className='info'>
                    <h2>
                        {/*  Icon */}
                        <i class="bx bx-street-view" style={{fontSize:'50px',color:'white'}}></i>
                        
                        <br></br> 
                        <span style={{fontWeight:'bolder',fontFamily:'sans-serif',color:'white'}}>{data.name}</span>
                    </h2>
                    <h1 className='temp'>
                       <span style={{fontWeight:'bolder',fontFamily:'sans-serif',color:'white'}}>{Math.round(data.celcius)}°C</span> 
                    </h1>
                    <div className='max'>
                       <p>
                        <span style={{fontWeight:'bolder',fontFamily:'sans-serif',color:'white'}}>{Math.round(data.humidity)}% Humiditly</span>
                       </p>
                       
                    </div>
                    <div className='max'>
                       <p>
                       <span style={{fontWeight:'bolder',fontFamily:'sans-serif',color:'white'}}>{Math.round(data.speed)} km/h</span>
                       </p>
                     
                    </div>
                </div>
         
                </center>
        </div>
    </>
  )
}

export default Teamapp