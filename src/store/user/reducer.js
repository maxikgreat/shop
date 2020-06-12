import {USER_LOGOUT, USER_SIGNUP, USER_LOGIN, USER_FETCH_HISTORY} from '../types';

const initialState = {
  logged: false,
  uid: '',
  email: '',
  history: {}
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
    default: return state;
  }
}