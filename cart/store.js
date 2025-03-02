import { createStore } from "redux";

// Initial State
const initialState = {
  cart: []  // Store cart items
};

// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action Creators
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });

// Reducer Function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] }; // Add item
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }; // Remove item
    default:
      return state;
  }
};

// Create Redux Store
export const store = createStore(cartReducer);
l