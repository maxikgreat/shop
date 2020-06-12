
import {useDispatch, useSelector} from 'react-redux';
import {useContext} from 'react';
import {fetchProducts, buyProducts, rateProduct} from '../store/shop/actions';
import {fetchCart, addToCart, deleteFromCart, deleteAll} from '../store/cart/actions';
import { SnackbarContext } from '../context/SnackbarContext';


export const useShop = () => {
  const dispatch = useDispatch();
  const shop = useSelector(state => state.shop);
  const cart = useSelector(state => state.cart);
  const snackbar = useContext(SnackbarContext);

  const fetchList = async () => {
    await dispatch(fetchProducts());
  };

  const getCategories = () => {
    const categories = [];
    for (let category in shop.products) {
      const categoryItem = {};
      categoryItem.name = category;
      categoryItem.items = shop.products[category].length;
      categories.push(categoryItem);
    }
    return categories;
  };

  const getItemsByCategory = (category) => {
    return shop.products[category].map(item => item);
  };

  const getAllItems = () => {
    const items = [];
    for (let category in shop.products) {
      shop.products[category].forEach(item => {
        items.push(item);
      });
    }
    return items;
  }

  const buyItems = async (cart) => {
    if (cart.items.length > 0) {
      const error = await dispatch(buyProducts(cart.items));
      if (error) {
        snackbar.show(error);
      } else {
        snackbar.show('Stuff was succesfully bought');
        deleteAllCart();
      }
    } else {
      snackbar.show('No items in cart')
    }
  }

  const rateItem = async (item, value) => {
    const error = await dispatch(rateProduct(item, value));
    if (error) {
      snackbar.show(error);
    } else {
      snackbar.show("You've rated this item");
    }
  }

  const fetchShoppingCart = () => {
    dispatch(fetchCart());
  }

  const addToShoppingCart = (prod) => {
    dispatch(addToCart(prod));
  }

  const deleteFromShoppingCart = (prod) => {
    dispatch(deleteFromCart(prod))
  }

  const deleteAllCart = () => {
    dispatch(deleteAll());
  }

  return {
    fetchList, 
    getCategories, 
    getAllItems, 
    getItemsByCategory,
    fetchShoppingCart,
    addToShoppingCart,
    deleteFromShoppingCart,
    deleteAllCart,
    buyItems,
    rateItem,
    cart,
    shop
  };
};
