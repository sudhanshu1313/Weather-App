export  const reducer = (state,action)=>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item:state.item.filter((curElem)=>{
                return curElem.id !== action.payload;
            })
        }
    }

    if(action.type === "CLEAR_CART")
    {
        return{  ...state, item:[""] };
    }


    
    if(action.type === "INCRIMENT")
    {
      let updatedCart = state.item.map((curElem)=>{
        if(curElem.id === action.payload){
            return{...curElem,quantity:curElem.quantity + 1};
        }
        return curElem;
      });
      return {...state,item:updatedCart};

    }
    return state;


};