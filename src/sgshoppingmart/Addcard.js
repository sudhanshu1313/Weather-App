import React, { createContext, useReducer, useState } from 'react';
import ContaxtCart from './ContaxtCart.js';
import { reducer } from './reducer';

import Data1 from './Data1.json';
import { Scrollbars } from 'react-custom-scrollbars-2';

export const CartContext = createContext();

const initialState = {
  item: Data1,
  totalAmount: 0,
  totalItem: 0,
};

function Addcard() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const [cart, setCart] = useState([]);
 

  const Addtocart = (Data1) => {
    const setCart = ([...cart, Data1]);
    setCart([...cart, Data1]);
  };
  
  

  return (

    <CartContext.Provider value={{ ...state,removeItem,increment,Addtocart }}>
      <Scrollbars style={{ height: '700px' }}>
        <ContaxtCart cart={cart} />
      </Scrollbars>
    </CartContext.Provider>
    
  );
}

export default Addcard;
