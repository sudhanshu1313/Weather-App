import React from 'react'

import './Ragitration.css'
function Ragitration() {
  return (
    <>
      <div className="Conatiner">
            <div>
                <form action="http://localhost:5000/create" method="post">
                <h4 style={{color:"white",fontFamily:"Segoe UI', Tahoma, Geneva, Verdana, sans-serifs",fontWeight:"bold"}}>Registration From</h4>
                <input className='INPUT' type="text" name="fname" onclick="this.value=''" placeholder="First name" />
                <br />
                <br />
                <input className='INPUT' type="text" name="lname" onclick="this.value=''" placeholder="Lirst name" />
                <br />
                <br />
                <input className='INPUT' type="email" name="email" onclick="this.value=''" placeholder="Email" />
                <br />
                <br />
                <input className='INPUT' type="password" name="password" placeholder="Password" />
                <br />
                <br />
                <button className='LOGINBTN'><b>Registration</b></button>
                <br />
                <br />
                </form>
            </div>
     </div>


    </>
  )
}

export default Ragitration