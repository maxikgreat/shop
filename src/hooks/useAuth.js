import {useDispatch} from 'react-redux';
import {login, logout, signup} from '../store/user/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  
  const auth = (email, password, newUser = false) => {
    if (newUser) {
      dispatch(signup());
    } else {
      dispatch(login());
    }
  };

  return {auth};
};
