import React,{useContext,Context} from 'react'
import { CartContext } from './Addcard';


import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


function Item({id,image,Name,price,Category,About,quantity}) {
  const { removeItem,increment } = useContext(CartContext);


  return (
   
    
    
    <>
           
                
           <div className='items_info p-3 '>

                    

                    <div>
                        <img src={image} height="150px"></img>
                    </div>

                    <div >
                       <h6 style={{marginTop:"20px",marginLeft:"20px"}}> {Name} </h6>
                      
                    </div>

                    <div style={{display:"flex",justifyContent:"space-around",marginTop:"60px",marginLeft:"80px"}}>

                      <RemoveIcon  style={{marginRight:"20px"}}/>
                      <input className='INPUT' type='text' placeholder={quantity}/>
                      <AddIcon style={{marginLeft:"20px"}} onClick={()=>{ increment(id)}}/>

                      <p style={{marginLeft:"150px"}}><b>{price}</b></p>
                    </div>


                    <div style={{marginLeft:"150px",marginTop:"60px"}}>
                        <DeleteIcon onClick={()=>removeItem(id)} style={{color:"#F01F42"}}/>
                    </div>

           </div>

           <hr></hr>
    
    
    
    </>
  )
}

export default Item