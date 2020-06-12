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

export const buyProducts = (products) => {
  return async dispatch => {
    dispatch({
      type: SHOW_LOADER
    })
    let allProducts = {};
    let error = '';
    await firebase.database().ref('/').child('products')
      .once('value', snapshot => {
        allProducts = snapshot.val();
      });
    products.forEach(cartItem => { //item, quantity
      const foundedItem = allProducts[cartItem.item.category]
      .find(dbItem => cartItem.item.id === dbItem.id);
      if (foundedItem.quantity >= cartItem.quantity) {
        foundedItem.quantity -= cartItem.quantity;
      } else {
        error =  'Not enough goods in stock';
      }
    })
    const user = await firebase.auth().currentUser;
    if (user) {
      const setHistory = async (prod) => {
        await firebase.database().ref('/').child(user.uid)
          .child('history').push({
            time: Date.now(),
            item: prod.item,
            rate: 0,
          });
      };
      for (let prod of products) {
        setHistory(prod);
      }
    }
    if (error) {
      dispatch({
        type: HIDE_LOADER
      })
      return error
    } else {
      try {
        await firebase.database().ref('/').child('products')
          .set(allProducts);
      } catch (e) {
        return e.message
      }
      dispatch({
        type: HIDE_LOADER
      })
    }
  }
};

export const rateProduct = (prod, rate) => {
  return async dispatch => {
    try {
      const user = await firebase.auth().currentUser;
      await firebase.database().ref('/').child(user.uid)
        .child('history').child(prod.id).child('rate').set(rate);
    } catch (e) {
      return e.message;
    }
  }
}
