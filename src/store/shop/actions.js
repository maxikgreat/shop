import firebase from '../../firebase';
import { FETCH_PRODUCTS } from '../types';

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const resp = firebase.database().ref('/').child('products')
        .on('value', snapshot => {
          dispatch({
            type: FETCH_PRODUCTS,
            payload: snapshot.val(),
          })
        });
      console.log('Resp', resp);
    } catch (e) {
      console.log(e);
    }
  }
}