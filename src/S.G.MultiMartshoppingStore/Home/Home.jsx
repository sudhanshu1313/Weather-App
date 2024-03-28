import React,{useContext} from 'react'
import { UserContext } from '../App'


import './Home.css'

// tostify containent import heare
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  // we have import productes from app.js file
  const {Productes,Producteschair,addToCart} = useContext(UserContext);


  const showToastMessage = () => {
    toast.success('Add To Card Success..!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };


  return (
    <>
    <div className=''>
     <div className='row mt-4 '> 
         <span style={{color:'#0b5454',textAlign:'center',fontFamily:'fantasy',fontSize:'30px'}}><b>Trading Productes</b></span> 
     </div>
      {
        Productes.map((item, index) => {
          return (
            <div class="card Cards CARTSSHOW_HOME " style={{ width: "300px" }} key={index}>
              <img class="card-img-top" style={{ padding: "5px" }} src={item.image} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#979797" }}><b>{item.Name}</b></h5>
                <p style={{ lineHeight: "0.3", color: "#022B32" }} className="text-justify"><b>{item.price}</b></p>
                <button onClick={() => { showToastMessage(); addToCart(item) }} className='Home-Btn-1 btn-sm' style={{ fontFamily: 'fantasy', marginTop: '7px' }}>Add Cart</button>
                <ToastContainer />
              </div>
            </div>
          )
        })
      }
    

      {/* {
        Producteschair.map((item, index) => {
          return (
            <div class="card Cards CARTSSHOW_HOME SofaCart" style={{ width: "300px" }} key={index}>
              <img class="card-img-top" style={{ padding: "5px" }} src={item.image} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#979797" }}><b>{item.Name}</b></h5>
                <p style={{ lineHeight: "0.3", color: "#022B32" }} className="text-justify"><b>{item.price}</b></p>
                <button onClick={() => { showToastMessage(); addToCart(item) }} className='Home-Btn-1 btn-sm' style={{ fontFamily: 'fantasy', marginTop: '7px' }}>Add Cart</button>
                <ToastContainer />
              </div>
            </div>
          )
        })
      } */}
      
      </div>
    
    </>
  )
}

export default Home