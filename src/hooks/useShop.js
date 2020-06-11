
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../store/shop/actions';
import {fetchCart, addToCart, deleteFromCart, deleteAll} from '../store/cart/actions';


export const useShop = () => {
  const dispatch = useDispatch();
  const shop = useSelector(state => state.shop);
  const cart = useSelector(state => state.cart);

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
    cart
  };
};
