import firebase from '../../firebase';
import { FETCH_PRODUCTS, HIDE_LOADER, SHOW_LOADER} from '../types';

export const fetchProducts = () => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER,
    });
    try {
      let products = {};
      await firebase.database().ref('/').child('products')
        .on('value', snapshot => {
          products = snapshot.val();
          fetchImages(products);
          dispatch({
            type: FETCH_PRODUCTS,
            payload: products,
          });
          dispatch({
            type: HIDE_LOADER,
          });
        });
    } catch (e) {
      console.log(e);
      dispatch({
        type: HIDE_LOADER,
      });
    }
  };
}

const fetchImages = async (products) => {
  const getImage = async (category, item) => {
    try {
      return await firebase.storage().ref('/')
      .child(category)
      .child(`${item.vendor}_${item.model}.jpeg`).getDownloadURL();
    } catch (e) {
      return undefined;
    }
    
  };
  for (let category in products) {
    for (let item of products[category]) {
      item.img = await getImage(category, item);
    }
  }
};

