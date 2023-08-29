// src/reducers/cartReducer.js
const cartReducer = (state = { items: [], totalQuantity: 0 }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalQuantity: state.totalQuantity + 1,
        };
      }
    default:
      return state;
  } 
};

export default cartReducer;
