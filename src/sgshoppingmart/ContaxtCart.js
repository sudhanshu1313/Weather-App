import React, { useContext } from 'react';
import { CartContext } from './Addcard';

import Item from './Item';



import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ContaxtCart({cart}) {
  const { item, clearCart } = useContext(CartContext);

  if(item.length === 0){
    return(
      <>
       <header style={{ marginTop: '140px' }}>
          <div className='shop_topbar'>

         

              <ArrowBackIcon style={{ height: '30px', width: '80px'  }}/>
            <span className='shoppingtext'>Continue shopping</span>
          </div>
        </header>
       
        <section className='mt-3'>
       
          <h5>Shopping cart</h5>
          <p>You have <span><b>{item.length}</b></span> item in the shopping cart</p>
        </section>
      </>
    )
  }
  return (
    <>
      <div className='container mt-5'>

        <section className='mt-3'>
          
        

          <div className='cart-items-container mb-5' style={{ marginTop: '140px' }}>
            {/* we have call to all item in the json file */}
            <div className='Allcart'>
          
            
                {
                    item.map((val, index) => {
                      return <Item key={val.id} {...val} />;
                    })
                }
                
             
             





            </div>

          </div>

          <div className='line'>

          </div>
        


          <div className='cart-total'>
              <hr></hr>
            <h5>Shopping cart</h5>
            <p>You have <span style={{color:"red"}}><b>{item.length}</b></span> item in the shopping cart</p>
            <hr></hr>
              <h5 style={{marginLeft:"10px"}}><b>Cart Total: <span>32,000rs</span></b></h5>
              <button className='btn btn-outline-primary mx-2'>Checkout</button>
              <button className='btn btn-outline-danger ' onClick={ clearCart }>Clare All</button>
              <hr></hr>
          </div>

        </section>
      </div>
    </>
  );
}

export default ContaxtCart;
