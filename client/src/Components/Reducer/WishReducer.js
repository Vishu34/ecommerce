const WishReducer = (state, action) => {
  if (action.type === "ADD_WISH_LIST") {
    // suppose vercel me map in undefined null  error aaye to ye likhna fir bhi aaye to niche wala likhana
    if (!state.wishdata) {
      return [];
    }
    // if (!state.wishdata) {
    //   state = {
    //     wishdata: [],
    //   };
    // }
    const { id, productfilter } = action.payload;

    if (state.wishdata.indexOf(productfilter) === -1) {
      let exist = state.wishdata.find((elm) => elm.id === id);
      if (exist) {
        // if you want to redirect the page then
        // window.location.href="/product"
        return state;
      } else {
        return {
          ...state,
          wishdata: [...state.wishdata, productfilter],
        };
      }
    }
  }

  if (action.type === "REMOVE_WISH") {
    let updatedata = state.wishdata.filter((elm) => {
      return elm.id !== action.payload;
    });
    return {
      ...state,
      wishdata: updatedata,
    };
  }

  if (action.type === "CLEAR_WISH_LIST") {
    return {
      ...state,
      wishdata: [],
    };
  }

  if (action.type === "TOTAL_WISH") {
    let totalData = 0;
    // if(state.wishdata) phle aise the lekin vercel error k karan
    if (state.wishdata&& state.wishdata.length>0) {
      totalData = state.wishdata.reduce((initialvalue, elm) => {
        initialvalue = initialvalue + elm.data;
        return initialvalue;
      }, 0);
    }

    return {
      ...state,
      totalwish: totalData,
    };
  }
};

export default WishReducer;
