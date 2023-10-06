


const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
  
      // Initialize state.cart as an empty array if it is null
      if (!state.cart) {
        state.cart = [];
      }
  
      let existingProduct = state.cart.find((curItem) => curItem.id === id);
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id,
          name: product.name,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
  
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }

    if(action.type==="INCRMENT_ITEM"){
      let updatedata=state.cart.map(elm=>{
         if(elm.id===action.payload){
           let newamount=elm.amount+1
           if(newamount>=elm.max){
              newamount=elm.max
              
            
           }
           return{
            ...elm,
            amount:newamount
         }
         }else{
            return elm;
         }
         
      })
     return{
        ...state,
        cart:updatedata
     }

    }

    if(action.type==="DECREMENT_ITEM"){
        let updatedata=state.cart.map(elm=>{
            if(elm.id===action.payload){
                let deamount=elm.amount-1
                if(deamount<=1){
                    deamount=1;
                }
                return{
                    ...elm,
                    amount:deamount
                }
                
            }else{
                return elm
            }
        })
return{
    ...state,
    cart:updatedata
}
    }
  
  if(action.type==="REMOVE_ITEM"){
     let updatedata=state.cart.filter(elm=>{
       return elm.id!==action.payload
     })
     return{
        ...state,
        cart:updatedata
     }
  }

  if(action.type==="CLEAR_ITEMS"){
    return{
        ...state,
        cart:[]
    }
  }

  if(action.type==="TOTAL_PRICE"){
    // ye chij sahi h lekin vercel m error aa rha hai
    // let updatedata=state.cart.reduce((initialvalue,elm)=>{
    //     const {amount}=elm
    //     initialvalue=initialvalue+elm.price*amount
    //     return initialvalue
    // },0)

    // esliye aisa bhi likh sakte hai
    let updatedata=0;
    if(state.cart){
      updatedata=state.cart.reduce((initialvalue,elm)=>{
        // ya fir const{price,amount}=elm
        initialvalue=initialvalue+elm.price*elm.amount
        return initialvalue
      },0)
    }
    return{
        ...state,
        Total_price:updatedata
    }
    
  }
  

  if(action.type==="TOTAL_ITEMS"){
   
  // let updatedata=state.cart.reduce((initialvalue,elm)=>{
  //       initialvalue=initialvalue+elm.amount
  //       return initialvalue
  // },0)

  let updatedata=0;
  if(state.cart){
    updatedata=state.cart.reduce((initialvalue,elm)=>{
      initialvalue=initialvalue+elm.amount;
      return initialvalue
    },0)

  }
  return{
   ...state,
    Total_items:updatedata
  }
  }
 

}
  export default CartReducer;
  