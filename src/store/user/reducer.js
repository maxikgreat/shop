import {USER_LOGIN, USER_LOGOUT} from '../types';

const initialState = {
  logged: false,
  token: '',
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        logged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        logged: false,
      };
    default: return state;
  }
}