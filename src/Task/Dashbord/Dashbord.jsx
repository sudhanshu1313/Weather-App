import React from 'react'

import './Dashbord.css'


//  I have imports icons 
import MenuIcon from '@mui/icons-material/Menu';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


function Dashbord() {
  return (
    <>
    
    <div className='container-fluid Rightbar'>

      <div className='row Topbar'>

        <div className='LeftICONS'>

              <div className='IconItems1'>
                  <MenuIcon style={{color:'white'}}/>
              </div>
              <div  className='IconItems2'>
                <LocalPostOfficeIcon style={{color:'white'}}/>
              </div>
              <div className='IconItems3'>
                <AddAlertIcon style={{color:'white'}}/>
              </div>
              <div className='IconItems4'>
                  <BusinessCenterIcon style={{color:'white'}}/>
              </div>
        
        </div>



        <div className='RightUser'>
            <div style={{marginRight:'30px',marginTop:'10px'}}>
              <input type='text'></input>
            </div>
            <div style={{marginRight:'30px'}}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEBrVjihcSZNu9x9zv2fO7VF-8Nqq8Yo3KhIhGq0&s' width="50px" style={{borderRadius:'50%'}}/>
              <span style={{marginLeft:'30px'}}>Sudhanshu G Gaikwad</span>
            </div>
        </div>



      </div>

      <div className='Section1'>

        <div className='Cart1'>
           <div style={{display:'flex'}}>
                <div className='ItemBg'>
                    $
                </div>
                <div>
                    <span className=''>
                       $452
                    </span>
                    <span>
                      Total Revenue
                    </span>

                </div>
            </div>
        </div>
          
          
      </div>



    </div>
    
    </>
  )
}

export default Dashbord