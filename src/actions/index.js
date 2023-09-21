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

    fetch("https://paradox122.000webhostapp.com/_API/Shop.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status) {
          dispatch(fetchProductsSuccess(data.products));
        } else {
          // If status is not true, you can dispatch an error or take other actions
          console.error("API status is not true");
          // Dispatch an error action if needed
          // dispatch(fetchProductsFailure("API status is not true"));
        }
      })
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





//brands data
export const FETCH_BRANDS_SUCCESS = "FETCH_BRANDS_SUCCESS";

export const fetchBrandsSuccess = (brands) => ({
  type: FETCH_BRANDS_SUCCESS,
  payload: brands,
});

export const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";


export const setSelectedBrand = (brandId) => ({
  type: SET_SELECTED_BRAND,
  payload: brandId,
});


export const SET_SELECTED_SUBCAT = "SET_SELECTED_SUBCAT";
export const setSelectedSubcat = (subcatName) => ({
  type: SET_SELECTED_SUBCAT,
  payload: subcatName,
});


export const fetchBrands = () => {
  return (dispatch) => {
    // You should fetch the brand data from your API here
    // For demonstration purposes, I'll provide a basic example using a mock data structure.

    // Replace this with your actual API endpoint for fetching brands
    fetch("https://paradox122.000webhostapp.com/_API/Brands.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status) {
          // Dispatch the success action with the fetched data
          dispatch(fetchBrandsSuccess(data.brands));
        } else {
          console.error("API status is not true");
          // You can dispatch an error action if needed
          // dispatch(fetchBrandsFailure("API status is not true"));
        }
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        // Dispatch an error action if needed
        // dispatch(fetchBrandsFailure(error));
      });
  };
};