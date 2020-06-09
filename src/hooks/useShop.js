
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../store/shop/actions';

export const useShop = () => {
  const dispatch = useDispatch();
  const shop = useSelector(state => state.shop);

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

  return {fetchList, getCategories, getAllItems, getItemsByCategory};
};
