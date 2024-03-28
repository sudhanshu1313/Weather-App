import React,{useEffect, useState} from 'react'
import Data1 from'./Data1.json'
import Modal from 'react-bootstrap/Modal';


import AddCircleIcon from '@mui/icons-material/AddCircle';


// tostify containent import heare
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Home() {

  const showToastMessage = () => {
    toast.success('Add Card Success..!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const showToastMessage1 = () => {
    toast.info('Inform You have book Product..!', {
      position: toast.POSITION.TOP_RIGHT
  });
  };
  const showToastMessage2 = () => {
    toast.info('Inform You have book Watch..!', {
      position: toast.POSITION.TOP_RIGHT
  });
  };

  



  // this is for filter all cardes

  const [sofa,setSofa]= useState(Data1)

  useEffect(()=>{
      let sofaData1 = Data1.filter((value)=>value.Category === "sofa")
      setSofa(sofaData1)
  })


 const [chair,setChair]= useState(Data1)

  useEffect(()=>{
    let chairData1 = Data1.filter((value)=>value.Category === "chair")
    setChair(chairData1)
})

 const [bed,setBed] = useState(Data1)

 useEffect(()=>{
  let bedData1 = Data1.filter((value)=>value.Category === "bed")
  setBed(bedData1)
 })


const [phone,setPhone] = useState(Data1)

useEffect(()=>{
  let phoneData1 = Data1.filter((value)=>value.Category === "phone")
  setPhone(phoneData1)
})


const [airpods,setAirpods] = useState(Data1)

useEffect(()=>{
  let airpodsData1 = Data1.filter((value)=>value.Category === "airpods")
  setAirpods(airpodsData1)
})

const [watch,setWatch] = useState(Data1)

useEffect(()=>{
  let watchData1 = Data1.filter((value)=>value.Category === "watch")
  setWatch(watchData1)
})

const [petbed,setPetbed] = useState(Data1)

useEffect(()=>{
  let petbedData1 = Data1.filter((value)=>value.Category === "petbed")
  setPetbed(petbedData1)
})




  // this is for cardes 
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };



  return(
   <>
      
        <div className='container-fluide maincontainer'>

          
           

      <div className='row mt-5 '>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FHP-BANNER-DESKTOP-15.png%3Fcontext%3DbWFzdGVyfHJvb3R8NjY3NDV8aW1hZ2UvcG5nfGgyMy9oN2IvOTAyNDIzMDYyMTIxNC5wbmd8M2ZkYWI0Yjg5ZjIzNjI1ZDAzYWU2OWY3NDJjYjQ2M2YwNDNlNjkwYWI0NmE3NTJlMDAwY2RlNjU4NmU3YmRiNw" height="420px" class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FLPbanner-desktop-Clearance.png%3Fcontext%3DbWFzdGVyfHJvb3R8Mjg2NzcwfGltYWdlL3BuZ3xoMjUvaDgwLzkwMjE0NzIzNzQ4MTQucG5nfDcyNmJmYzM1MzIyOWU5MjUyMWE5OTRmZTdiZDk5ODRmZTIwNjk1MjdjNzk3MGZkZWIxMmE4N2Y1YzIzMjQxZjQ" height="420px" class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item">
                    <img src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FHPbanner-desktop-Jack-Velvet.png%3Fcontext%3DbWFzdGVyfHJvb3R8NTMwNTgwfGltYWdlL3BuZ3xoMjMvaGM5LzkwMjQwNTUwMTc1MDIucG5nfGM2MjUwNjU4N2JkNzVhYmQyNWUzZmIwNWUwZWY1NDc0MjQyNTUzOTdjODZhZGRiMmY0MWI3MzE4MmViNzliMjE" height="420px" class="d-block w-100" alt="..."></img>
                  </div>
                  <div class="carousel-item">
                    <img src="https://www.apple.com/v/airpods-2nd-generation/e/images/overview/hero_fallback__fsi5p5kx7t6q_medium_2x.jpg"  height="420px" class="d-block w-100" alt="..."></img>
                  </div>
                 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
          </div>
        </div>

          <div className='container mt-2'>


            {/* Section Trading Productes start */}

            <div className='row mt-4 '> 
                      <span style={{color:'#0b5454',textAlign:'center',fontFamily:'fantasy',fontSize:'30px'}}><b>Trading Productes</b></span> 
            </div>

          <div className='row mt-4' style={{marginLeft:'20px'}}> 

              {
                sofa.map((value,s)=>{
                  return(
                    <>
                     

                      <div class="card Cards CARTSSHOW_HOME " style={{width: "300px",marginLeft:'10px',marginBottom:'10px'}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        
          
                      
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm ' style={{fontFamily:'fantasy',marginTop:'7px'}}>Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }

             

              

              
               
                    

                        {/* {
                          sofa.map((value) => (
                            <div className="col card" style={{ width: '350px' }} key={value.id}>
                              <img className="card-img-top" style={{ padding: '5px' }} src={value.image} alt="Card image" />
                              <div className="card-body">
                                <h4 className="card-title">{value.Name}</h4>
                                <p className="card-text">{value.price}</p>
                                <a href="#" className="btn btn-secondary bcolor" onClick={handleShowModal}><b>Vivew</b></a>
                              </div>

                              <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                  <Modal.Title>{value.Name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <img className="card-img-top" style={{ width: '100px' }} src={value.image} alt="Card image" />
                                  <p>{value.Name} description goes here...</p>
                                </Modal.Body>
                                <Modal.Footer>
                                  <button className="btn btn-danger" onClick={handleCloseModal}>Close</button>
                                </Modal.Footer>
                              </Modal>
                            </div>
                          ))
                        } */}
          </div>
          {/* Section Trading Productes End */}
            



{/* Section Chaire Information  Start */}
          <div className='row mt-5 mb-4 LOGOIMG' style={{display:'flex',justifyContent:'space-between',padding:'10px'}}> 
              <div className='col-6' style={{color:'#0b5454'}}>
                      <h2 style={{fontFamily:'fantasy'}}>Velvet Armchairs Give your guests the best seat in the house!</h2>
                      <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>Go bold with colour, play around with textures, and enjoy classic neutrals with our selection of handcrafted fabric armchairs.</p>
                      <button className='BUTTON' onClick={showToastMessage1}  style={{fontFamily:'fantasy'}}><b>Book Now</b></button>
                      <ToastContainer />
          </div>

              <div className='col-6'>
               <img style={{marginLeft:'250px'}} src="https://media.sofa.com/thumbor/unsafe/fit-in/440x220/center/middle/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2F%3Fcontext%3DbWFzdGVyfHJvb3R8MTAyMzUzfGltYWdlL2pwZWd8aGI4L2gwMC84OTk5MDA3NDUzMjE0LmpwZ3xkNzg0M2FkMDljMzljYTM2OTRkZTQzZmE0MmU2MDQ3MDE0ZTIyZjdhNDAyNzM5ZDU5NDAxOTU5ZTIyZGE2ZjJj" height="200px"/>  
              </div>
          </div>

{/* Section Chaire Information  end */}

          <div className='row mt-5 mb-5' style={{marginLeft:'20px'}}> 
            
         
            
          

            {
                chair.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards CARTSSHOW_HOME" style={{width: "300px",marginLeft:'10px',marginBottom:'10px'}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm' style={{fontFamily:'fantasy',marginTop:'7px'}}> Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }

          </div>

          {/* Section New bed Start */}

        <div className='row mt-5 mb-4 LOGOIMG' style={{padding:'10px',display:'flex',justifyContent:'space-between'}}> 
              <div className='col-6' style={{color:'#0b5454'}}>
                      <h2 style={{fontFamily:'fantasy'}}>Bed</h2>
                      <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>Time to get cosy,There really is nothing better than a great night’s sleep. Wake up in sumptuous, supportive comfort with our collection of luxurious designs, fabulously textured frames, and ridiculously comfy mattresses.</p>
                      <button className='BUTTON' onClick={showToastMessage1}  style={{fontFamily:'fantasy',marginTop:'7px'}}><b>Book Now</b></button>
                      <ToastContainer />
          </div>

              <div className='col-6'>
               <img style={{marginLeft:'220px'}} src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2Fsofa-beds.png%3Fcontext%3DbWFzdGVyfGltYWdlc3wzNjU4ODd8aW1hZ2UvcG5nfGltYWdlcy9oNTQvaGE0Lzg5NTMwOTE0NTcwNTQucG5nfDJhMTJhOTE3ZmI4MWU2NzdmZWRiZTRlOTZjNGExN2NkY2JmMTcxN2I3YWJmYjc0MWExNjZmYTcyYjIyNmFjZmU" height="200px"/>  
              </div>

          </div>
          <div className='row mt-5 mb-5' style={{marginLeft:'20px'}}> 
            
         
            
          

            {
                bed.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards CARTSSHOW_HOME" style={{width: "300px",marginLeft:'10px',marginBottom:'10px'}}>
                      <img class="card-img-top" style={{padding:"5px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm' style={{fontFamily:'fantasy',marginTop:'7px'}}> Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }

          </div>
       

    {/* Section New bed End */}

                 {/*Books  Category start */}

         


          <div className='row mt-5 mb-4 LOGOIMG' style={{padding:'10px',display:'flex',justifyContent:'space-between'}}> 
              <div className='col-6 ' style={{color:'#0b5454'}}>
                      <h2 style={{fontFamily:'fantasy'}}> Pet Bed / Floor Lamp</h2>
                      <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>Luxurious living for your four-legged friends. / It’s time to put your home in the spotlight!,Our oversized Vandross floor lamp is sure to create a focal point in any room.</p>
                      <button className='BUTTON' onClick={showToastMessage1}  style={{fontFamily:'fantasy'}}><b>Book Now</b></button>
                      <ToastContainer />
             </div>

              <div className='col-6'>
               <img style={{marginLeft:'230px'}} src="https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FSS23-AccessoriesStamp-Lighting-5.png%3Fcontext%3DbWFzdGVyfHJvb3R8OTkzODh8aW1hZ2UvcG5nfGg5My9oMWYvOTAyMDU1MjExODMwMi5wbmd8YzdkYTdkZWZmZjAzYjkwOTI0MGY2NTAzZDRkNDkyODE3YmQyMzgzODc1ODMzNjQ0NzYyZGJkZWFlNmIzZGZmYg" height="200px"/>  
              </div>

          </div>



          <div className='row mt-4 bgimg' style={{marginLeft:'20px'}}> 

              {
                petbed.map((value)=>{
                  return(
                    <>
                    

                      <div class="card Cards CARTSSHOW_HOME" style={{width: "270px",marginLeft:'30px',marginBottom:'10px'}}>
                      <img class="card-img-top" style={{padding:"10px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                       
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm' style={{fontFamily:'fantasy',marginTop:'7px'}}>Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }  
        
          </div>
  
  
  {/* Books in Category End */}

            













        {/* Section New Arrivals start */}
            
            
          <div className='row mt-5 mb-4 LOGOIMG' style={{padding:'10px',display:'flex',justifyContent:'space-between'}}> 
              <div className='col-6' style={{color:'#0b5454'}}>
                      <h2 style={{fontFamily:'fantasy'}}>Why Apple is the best place to buy iPhone.?</h2>
                      <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.You can also chat with a Specialist anytime.</p>
                      <button className='BUTTON' onClick={showToastMessage1}  style={{fontFamily:'fantasy'}}><b>Book Now</b></button>
                      <ToastContainer />
             </div>

              <div className='col-6'>
               <img  style={{marginLeft:'350px'}} src="https://www.apple.com/in/iphone/home/images/overview/retail/apple_card__bkmaxfjg05ua_medium_2x.jpg" height="200px"/>  
              </div>

          </div>

          <div className='row mt-5 mb-5'> 
                <span style={{color:'#0b5454',textAlign:'center',fontFamily:'fantasy',fontSize:'30px'}}><b>New Arrivals</b></span>
          </div>



          <div className='row mt-4' style={{marginLeft:'20px'}}> 

               {
                phone.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards CARTSSHOW_HOME" style={{width: "270px",marginLeft:'30px',marginBottom:'10px'}}>
                      <img class="  card-img-top" style={{padding:"10px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm' style={{fontFamily:'fantasy',marginTop:'7px'}} > Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }

              {
                airpods.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards CARTSSHOW_HOME" style={{width: "270px",marginLeft:'30px',marginBottom:'10px'}}>
                      <img class=" card-img-top" style={{padding:"10px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm' style={{fontFamily:'fantasy'}}> Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }

          </div>

        {/* Section New Arrivals End */}


   

        {/* Section Chaire Information  Start */}
        <div className='row mt-5 mb-4 LOGOIMG' style={{padding:'10px',display:'flex',justifyContent:'space-between'}}> 
              <div className='col-6' style={{color:'#0b5454'}}>
                      <h2 style={{fontFamily:'fantasy'}}>Which Apple Watch is right for you..?</h2>
                      <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>Why Apple Watch..?</p>
                      <p style={{fontFamily:'fantasy',fontWeight:'bold'}}>It’s the ultimate device for a healthy life.</p>
                      <button className='BUTTON' onClick={showToastMessage2}  style={{fontFamily:'fantasy'}}><b>Book Now</b></button>
          </div>

              <div className='col-6'>
               <img style={{marginLeft:'350px'}} src="https://www.apple.com/in/watch/home/images/overview/se/tile-watch-se__knji2d25x8qe_medium_2x.jpg" height="230px"/>  
              </div>
          </div>
          <div className='row mt-4 bgimg' style={{marginLeft:'20px'}}> 

              {
                watch.map((value)=>{
                  return(
                    <>
                     

                      <div class="card Cards CARTSSHOW_HOME" style={{width: "270px",marginLeft:'30px',marginBottom:'10px'}}>
                      <img class="card-img-top" style={{padding:"10px"}} src={value.image} alt="Card image cap"></img>
                      <div class="card-body">
                        <h5 class="card-title" style={{color:"#979797"}} ><b>{value.Name}</b></h5>
                        <p style={{lineHeight:"0.3",color:"#022B32"}} className="text-justify"><b>{value.price}</b></p>
                        <button onClick={showToastMessage} className='btn btn-outline-secondary btn-sm' style={{fontFamily:'fantasy',marginTop:'7px'}}>Add Card <AddCircleIcon/></button>
                        <ToastContainer />
                      </div>
                    </div>
                    
                    </>
                  )
                })
              }  
          </div>

{/* Section Chaire Information  end */}
        
       


        </div>
    
    

        
      
  

   
   </>
  )
}

export default Home