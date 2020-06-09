import {USER_LOGOUT, USER_SIGNUP, USER_LOGIN} from '../types';

const initialState = {
  logged: false,
  uid: '',
  email: '',
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return {
        ...state,
        ///logged: false,
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
    default: return state;
  }
}