import React, { useReducer, useState } from 'react';

const initialstate = 0;

const reducer = (state,action)=>{
if(action.type === "Incriment"){
    return state + 1
}

if(action.type === "Dicriment"){
    return state - 1
}

return state
}

function Hook() {
   
        const [state,dispatch] = useReducer(reducer,initialstate)
  
    
    return (
        <>
           

                      

            <div className='mx-5 mt-3'>
                        <th>Number:- {state}</th>
                        <button className='mt-2' onClick={()=>dispatch({type:"Incriment"})}>Incriment</button>
                        
                        <button onClick={()=>dispatch({type:"Dicriment"})}>Dincriment</button>
            </div>
        </>
    );
}

export default Hook;
