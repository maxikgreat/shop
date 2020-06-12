import {USER_LOGOUT, USER_SIGNUP, USER_LOGIN, USER_FETCH_HISTORY, USER_FETCH_BONUS, USER_PROMO_SUCCESS} from '../types';

const initialState = {
  logged: false,
  uid: '',
  email: '',
  history: {},
  bonus: 0
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return {
        ...state,
        logged: false,
        uid: '',
        email: '',
        history: {}
      };
    case USER_SIGNUP:
      return {
        ...state,
        logged: true,
        uid: payload.uid,
        email: payload.email
      };
    case USER_LOGIN:
      return {
        ...state,
        logged: true,
        uid: payload.uid,
        email: payload.email
      }
    case USER_FETCH_HISTORY: 
      return {
        ...state,
        history: payload
      }
    case USER_FETCH_BONUS:
      return {
        ...state,
        bonus: payload
      }
    case USER_PROMO_SUCCESS: 
      return {
        ...state,
        bonus: payload
      }
    default: return state;
  }
}