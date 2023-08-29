// src/actions/index.js

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    fetch('http://localhost:5000/product')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => dispatch(fetchProductsSuccess(data)))
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
};




// src/actions/index.js

export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export const searchProducts = (query) => ({

  type: SEARCH_PRODUCTS,
  payload: query,
});









