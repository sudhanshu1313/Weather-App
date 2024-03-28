import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Data1 from'./Data1.json'

import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// tostify containent import heare
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Shop() {

// tostify containent create heare
  const showToastMessage = () => {
    toast.success('Add Card Success..!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };


  const [query, setQuery] = useState('');

  function search(e) {
    setQuery(e.target.value);
    if (Data1.Category === query) {
      // ...
    }
  }



    const [alldata, setAlldata] = useState(Data1);

    const setCategory = (val) => {
      let FilterData = Data1.filter((value) => value.Category === val);
      setAlldata(FilterData);
    };


    const addToCart = (value) => {
      // Add logic to handle adding the item to the cart
      console.log('Adding to cart:', value);
      showToastMessage();
    };

  


  return (
    <>



        <div className='container-fluide mainshop '>







              <div className='row BGIMG-SHOP '>
                  <div className='BGIMG2'>
                  
                   <h1 style={{position:"relative",left:"30px",top:'10px',color:"whitesmoke",fontSize:"90px",fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Sofa Beds</h1>
                   <h1 style={{position:"relative",left:"30px",top:'10px',color:"whitesmoke",fontSize:"25px",fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Sleep and sit in sumptuous style...</h1>
                   <h1 style={{position:"relative",left:"30px",top:'10px',color:"whitesmoke",fontSize:"25px",fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Sleep or sit? Why not do both with our great range of sofa beds and pull out beds? </h1>
                   <h1 style={{position:"relative",left:"30px",top:'10px',color:"whitesmoke",fontSize:"25px",fontFamily:"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}> Perfect for extra house guests, we’re dedicated to creating a collection of generous sofa beds  </h1>
                   <h1 style={{position:"relative",left:"1050px",top:'10px',top:"-150px",color:"whitesmoke",fontSize:"80px",fontFamily:"revert-layer"}}>50% OFF</h1>
                  </div>                  
              </div>






          <div className='row  Searchbox '>
              <div className='col-sm-4 '>

              </div>

              <div style={{marginTop:'50px',marginRight:'-30px',marginLeft:'30px'}} className='col-1'>

                  <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                          Seclect
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("sofa")}}>Sofa</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("chair")}}>Chair</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("bed")}}>Beds</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("phone")}}>Phone</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("airpods")}}>Airpods</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("watch")}}>Watch</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={()=>{ setCategory("petbed")}}>Pet Beds / Lamp</Dropdown.Item>
                        </Dropdown.Menu>
                  </Dropdown>

              </div>


              <div style={{marginTop:'52px',}} className='col-sm-3'>

                <div className="w-full max-w-xl flex mx-auto p-20 text-xl">

                      <input
                          type="text"
                          className="w-full placeholder-gray-400 text-gray-900 p-1"
                          placeholder="Search something..!"
                          onChange={()=>{search()}}
                          value={query}
                      />


                      <button style={{marginTop:"px",marginLeft:"3px"}} className="bg-white p-1">  <SearchIcon/> </button>

                </div>

              </div>

              <div className='col-4'>

              </div>

          </div>

          <div className='container'>
              <div className='row mt-5'>
                    {
            
            alldata.map((value) => (
              <div
                className='card Cards CARTSSHOW-SHOP'
                style={{ width: '300px', marginLeft: '20px', marginBottom: '10px' }}
              >
                <img class='card-img-top' style={{ padding: '5px' }} src={value.image} alt='Card image cap' />
                <div class='card-body'>
                  <h5 class='card-title' style={{ color: '#979797' }}>
                    <b>{value.Name}</b>
                  </h5>
                  <p style={{ lineHeight: '0.3', color: '#022B32' }} className='text-justify'>
                    <b>{value.price}</b>
                  </p>

                  <button
                    onClick={() => {
                      addToCart(value);
                    }}
                    className='btn btn-outline-secondary btn-sm'
                    style={{ fontFamily: 'fantasy', marginTop: '7px' }}
                  >
                    Add Card <AddCircleIcon />
                  </button>

                  {/* showToastMessage */}
                  <ToastContainer />
                </div>
              </div>
            ))
            
            }
              </div>
          </div>

        </div>
    
    
    
    </>

  )
}

export default Shop



