import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const navigate = useNavigate ();

    useEffect (()=>{
      localStorage.removeItem('username');
      navigate('/Home');
    },[]);

  return (
    <>

    <h1></h1>




    </>
  )
}

export default Logout