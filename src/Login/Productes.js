import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Wlcome from './Wlcome'
function Productes() {
  const navigate = useNavigate ();

  useEffect (()=>{
    if(localStorage.getItem ('username')){

    }else{
      navigate('/Home');
    }
  },[]);

  return (
    <>

      {localStorage.getItem('username') && <Wlcome/> }

    
    
    </>
  )
}

export default Productes