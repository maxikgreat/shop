import {FETCH_PRODUCTS} from '../types';

const initialState = {
  products: {},
};

export const shopReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS:
    return {
      ...state,
      products: payload
    };
    default: return state;
  }
}