import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../store/shop/actions';

export const useShop = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    await dispatch(fetchProducts());
  };

  return {loadingShop: loading, fetchList};
};
