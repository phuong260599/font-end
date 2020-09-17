import {
   GET_PRODUCT_ITEM_SUCCESS,
   DELETE_PRODUCT_ITEM_SUCCESS,
   CREATE_PRODUCT_ITEM_SUCCESS,
   EDIT_PRODUCT_ITEM_SUCCESS
  } from "../type/product";
  
  const initialState = {
    data: [],
    dataEdit:{

    }
  };
  
  let reducer = (state = initialState, action) => {
    switch (action.type) {
      //GET API
      case GET_PRODUCT_ITEM_SUCCESS:
          console.log(action.payload)
        return {
            ...state,
            data: action.payload
        };
        //DELETE API
      case DELETE_PRODUCT_ITEM_SUCCESS:
        console.log(action.payload)
      return {
          ...state,
          data: state.data.filter((e)=> e._id !== action.payload._id)
      };
       //CREATE API
       case CREATE_PRODUCT_ITEM_SUCCESS:
        console.log(action.payload)
      return {
          ...state,
          data: [...state.data,action.payload]
      };
         //GETEDIT API
         case EDIT_PRODUCT_ITEM_SUCCESS:
          console.log(action.payload)
        return {
            ...state,
            dataEdit: action.payload
        };
      default:
        break;
    }
    return state;
  };
  
  export default reducer;
  