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
      console.log(e.message);
      dispatch({
        type: HIDE_LOADER,
      });
    }
  };
};

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
        await firebase.database().ref('/users').child(user.uid)
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
      if (user) {
        await firebase.database().ref('/users').child(user.uid)
        .child('history').child(prod.id).child('rate').set(rate);
        let rateProduct = {};
        await firebase.database().ref('/')
          .child('products').child(prod.item.category).child(prod.item.id).child('rating')
          .once('value', snapshot => {
            rateProduct = snapshot.val();
          });
          if (rateProduct.average === 0) {
            rateProduct.reviews = [{
              user: user.email,
              mark: rate
            }];
            rateProduct.average = rate;
          } else {
            rateProduct.reviews.push({user: user.email, mark: rate});
            const allMarksSum = rateProduct.reviews.reduce((sum, item) =>  {
              return sum + item.mark;
            }, 0);
            rateProduct.average = allMarksSum / rateProduct.reviews.length;
          }
          await firebase.database().ref('/')
            .child('products').child(prod.item.category).child(prod.item.id).child('rating')
            .set(rateProduct);
      }
    } catch (e) {
      return e.message;
    }
  }
}

export const addCategory = async (value) => {
  const user = await firebase.auth().currentUser;
  if (!user) {
    return 'Error! Repeat log in procedure';
  }

  let products = {};
  try {
    await firebase.database().ref('/products')
    .once('value', snapshot => {
      products = snapshot.val();
    });
    if (!Object.keys(products).includes(value)) {
      products[value] = 'empty';
      await firebase.database().ref('/products').set(products);
      return `Category "${value}" was added`;
    } else {
      return 'This category already exists';
    }
  } catch (e) {
    return e.message;
  }
};

export const addProduct = async (value) => {
  const user = await firebase.auth().currentUser;
  if (!user) {
    return 'Error! Repeat log in procedure';
  }
  try {
    let isFirst = false;
    let existsProducts = [];
    await firebase.database().ref('/products')
      .child(value.category)
      .once('value', snapshot => {
        if (!Array.isArray(snapshot.val())) {
          isFirst = true;
        }
      });
    if (isFirst) {
      value.id = 0;
      value.rating = {
        average: 0
      };
      await firebase.database().ref('/products')
        .child(value.category).set([value]);
    } else {
      await firebase.database().ref('/products')
        .child(value.category)
        .once('value', snapshot => {
          existsProducts = snapshot.val();
        });
      value.id = existsProducts.length;
      value.rating = {
        average: 0
      };
      existsProducts = [...existsProducts, value];
      await firebase.database().ref('/products')
        .child(value.category).set(existsProducts);
    }
    return 'Item was successfully added'
  } catch (e) {
    return e.message;
  }
};