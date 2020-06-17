import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP, USER_FETCH_HISTORY, USER_FETCH_BONUS, USER_PROMO_SUCCESS} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../../firebase';
import { Base64 } from 'js-base64';

const fetchHistory = async (dispatch, uid) => {
    try {
      await firebase.database().ref('/users').child(uid).child('history')
       .on('value', snapshot => {
          dispatch({
          type: USER_FETCH_HISTORY,
          payload: snapshot.val()
        })
      })
  } catch (e) {
    console.log(e);
  }
}

const fetchBonus = async (dispatch, uid) => {
  try {
    let bonus;
    await firebase.database().ref('/users').child(uid).child('bonus')
      .once('value', snapshot => {
        bonus = snapshot.val();
      })
    if (!bonus) {
      await firebase.database().ref('/users').child(uid).child('bonus')
        .set(0)
    }
    await firebase.database().ref('/users').child(uid).child('bonus')
      .on('value', snapshot => {
        dispatch({
          type: USER_FETCH_BONUS,
          payload: snapshot.val(),
        })
      })
  } catch (e) {
    console.log(e);
  }
};

export const checkBonus = (bonus) => {
  return async dispatch => {
    try {
      let promos = [];
      let userBonus = 0;
      await firebase.database().ref('/').child('promo')
        .once('value', snapshot => {promos = snapshot.val()})
      const finded = promos.find(item => parseInt(item.code) === parseInt(bonus));
      if (finded) {
        const updatedPromos = promos.filter(item => parseInt(item.code) !== parseInt(bonus));
        await firebase.database().ref('/').child('promo')
          .set(updatedPromos);
        const user = firebase.auth().currentUser;
        await firebase.database().ref('/users').child(user.uid).child('bonus')
          .once('value', snapshot => {userBonus = snapshot.val()});
        userBonus += finded.value;
        await firebase.database().ref('/users').child(user.uid).child('bonus')
          .set(userBonus);
        dispatch({
          type: USER_PROMO_SUCCESS,
          payload: userBonus,
        });
        return 'Promocode was successfully applied';
      } else {
        return 'Incorrect promocode';
      }
    } catch (e) {
      return e.message;
    }
  }
};

export const updateBonus = (subtractValue) => {
  return async dispatch => {
    try {
      let bonus = 0;
      const user = await firebase.auth().currentUser;
      await firebase.database().ref('/users').child(user.uid).child('bonus')
        .once('value', snapshot => {bonus = snapshot.val()})
      bonus -= subtractValue;
      await firebase.database().ref('/users').child(user.uid).child('bonus')
        .set(bonus);
    } catch (e) {
      return e.message;
    }
  }
}

export const signup = (email, password) => {
  return async dispatch => {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await AsyncStorage.setItem('user', JSON.stringify({
        email: user.user.email,
        password: Base64.encode(password),
      }));
      if (user) {
        await firebase.database().ref('/users/').child(user.user.uid)
          .child('bonus').set(0);
        await fetchHistory(dispatch, user.user.uid);
        await fetchBonus(dispatch, user.user.uid);
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
        await fetchHistory(dispatch, user.user.uid);
        await fetchBonus(dispatch, user.user.uid);
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
          await fetchHistory(dispatch, user.user.uid);
          await fetchBonus(dispatch, user.user.uid);
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
