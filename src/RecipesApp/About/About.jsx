import React from 'react'
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import './About.css'
function About() {
  return (
    <>

      <div className='container MainDIV '>
        <div className='row'>

          <div className='col mt-4 mb-4'>
              <div className='Logo'>
                <OutdoorGrillIcon style={{color:"#581845",fontSize:"300px",textAlign:"center"}}/>
              </div>
          </div>

          <div className='col'>
            <div>
                <h3><b>About Recipes</b></h3>
                <span className='Paregraph'>
                  <span className='Text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </span>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default About