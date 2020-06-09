import firebase from '../../firebase';
import { FETCH_PRODUCTS, HIDE_LOADER, SHOW_LOADER} from '../types';

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER,
    });
    try {
      await firebase.database().ref('/').child('products')
        .on('value', snapshot => {
          dispatch({
            type: FETCH_PRODUCTS,
            payload: snapshot.val(),
          });
        });
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: HIDE_LOADER,
    });
  };
}
