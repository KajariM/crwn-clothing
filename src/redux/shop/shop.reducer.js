import SHOP_DATA from "./shopModel";

const INITIAL_STATE = {
  Collections: SHOP_DATA
}
  const shopReducer = (state=INITIAL_STATE, action) =>{
      switch(action.type) {
          default:
              return state;
      }
  }

  export default shopReducer;