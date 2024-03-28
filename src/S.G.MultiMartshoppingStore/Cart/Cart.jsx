import React,{useContext} from 'react'
import { UserContext } from '../App'
import './Cart.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Cart() {
  const {cart,removeFromCart} = useContext(UserContext);
  return (
    <>
      {
        cart.map((item,index)=>{
          return(

            <div className='cartItem' key={index}>
              <div>
                <img src={item.image} width="150px" height="80px" alt=""/>
              </div>

              <div>
                 <th>{item.Name}</th>
              </div>
              
              <div>
                <th>Rs : {item.price}</th>
              </div>
              
              <div>
                <button className='Cart-Btn' onClick={()=>{removeFromCart(item)}}><DeleteOutlineIcon/></button>
              </div>



            </div>

          )
        })
      }
    
    
    
    </>
  )
}

export default Cart