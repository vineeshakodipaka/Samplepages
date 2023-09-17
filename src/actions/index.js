// src/actions/index.js

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

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

    fetch("https://64c37c1ceb7fd5d6ebd0ebc4.mockapi.io/todo")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
};

// src/actions/index.js

export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";

export const incrementQuantity = (productId) => ({
  type: INCREMENT_QUANTITY,
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: DECREMENT_QUANTITY,
  payload: productId,
});

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export const searchProducts = (query) => ({
  type: SEARCH_PRODUCTS,
  payload: query,
});

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
