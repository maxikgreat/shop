import {ADD} from '../types';

const initialState = {
  number: 0,
};

export const shoppingCartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD:
      return {
        number: state.number + 1,
      };
    default: return state;
  }
};
