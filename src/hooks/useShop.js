
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
      let categoryItem = {};
      categoryItem.name = category;
      categoryItem.items = shop.products[category].length;
      categories.push(categoryItem);
    }
    return categories;
  };

  return {fetchList, getCategories};
};
