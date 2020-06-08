import {ADD} from '../types';

export const addOne = () => {
  return dispatch => {
    dispatch({
      type: ADD,
    });
  };
};
