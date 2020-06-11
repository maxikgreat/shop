import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../../firebase';
import { Base64 } from 'js-base64'

export const signup = (email, password) => {
  return async dispatch => {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (user) {
        dispatch({
          type: USER_SIGNUP,
          payload: {
            email: user.user.email,
            uid: user.user.uid,
          },
        });
      }
    } catch (e) {
      return e.message;
    }
  };
};

export const login = (email, password) => {
  return async dispatch => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify({
          email: user.user.email,
          password: Base64.encode(password),
        }));
        dispatch({
          type: USER_LOGIN,
          payload: {
            email: user.user.email,
            uid: user.user.uid,
          },
        });
      }
    } catch (e) {
      return e.message;
    }
  }
};

export const autoLogin = () => {
  return async dispatch => {
    try {
      const userJSON = await AsyncStorage.getItem('user');
      if (userJSON) {
        const {email, password} = JSON.parse(userJSON);
        const user = await firebase.auth().signInWithEmailAndPassword(
          email,
          Base64.decode(password),
        );
        if (user) {
          dispatch({
            type: USER_LOGIN,
            payload: {
              email: user.user.email,
              uid: user.user.uid,
            },
          });
        }
      }
    } catch (e) {
      return e.message;
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      await firebase.auth().signOut();
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('cart');
      dispatch({
        type: USER_LOGOUT,
      });
    } catch (e) {
      return e.message;
    }
  };
};
