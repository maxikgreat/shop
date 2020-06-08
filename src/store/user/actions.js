import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from '../types';

export const signup = (email, password) => {
  return dispatch => {
    console.log('signup user with', email, password);
    dispatch({
      type: USER_SIGNUP,
    });
  };
};

export const login = () => {
  console.log('login user with');
  return dispach => {
    dispach({
      type: USER_LOGIN,
    });
  };
};

export const logout = () => {
  console.log('logout user with');
  return dispatch => {
    dispatch({
      type: USER_LOGOUT,
    });
  };
};
