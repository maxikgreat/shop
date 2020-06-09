import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../../firebase';

export const signup = (email, password) => {
  return async dispatch => {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('refreshToken', user.user.refreshToken);
      dispatch({
        type: USER_SIGNUP,
        payload: {
          email: user.user.email,
          uid: user.user.uid,
        },
      });
    } catch (e) {
      return e.message;
    }
  };
};

export const login = (email, password) => {
  return async dispatch => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('refreshToken', user.user.refreshToken);
      dispatch({
        type: USER_LOGIN,
        payload: {
          email: user.user.email,
          uid: user.user.uid,
        },
      });
    } catch (e) {
      return e.message;
    }
  }
};

export const logout = () => {
  console.log('logout user with');
  return dispatch => {
    dispatch({
      type: USER_LOGOUT,
    });
  };
};
