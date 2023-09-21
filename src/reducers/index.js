// src/reducers/index.js

import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import brandsReducer from './brandsReducer'; // Import the brandsReducer
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  brands: brandsReducer, // Include the brandsReducer
});

export default rootReducer;
