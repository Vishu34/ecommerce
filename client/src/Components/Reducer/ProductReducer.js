const ProductReducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
          ...state,
          isloading:true,
            };
            case "SET_ERROR":
                return{
              ...state,
              isloading:false,
              iserror:true,
                };
        case "SET_DATA":
            const feature=action.payload.filter(elm=>{
                return elm.shipping===true
            })
            return{
                ...state,
                featureproduct:feature,
                products:[...action.payload]
            };
        case "SET_SINGLE_LOAD":
            return{
                ...state,
                singleload:true,
            }
            case "SET_SINGLE_DATA":
                return{
                    ...state,
                    singleload:false,
                    singleproduct:action.payload
                   
                }

            case "SET_ERRROR":
                return{
                       ...state,
                       iserrror:true
                }
    }
}
export default ProductReducer