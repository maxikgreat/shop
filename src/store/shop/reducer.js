import {FETCH_PRODUCTS, SHOW_LOADER, HIDE_LOADER} from '../types';

const initialState = {
  products: {},
  loading: false,
};

export const shopReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      }
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default: return state;
  }
}