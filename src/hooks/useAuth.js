import {useContext} from 'react';
import {SnackbarContext} from '../context/SnackbarContext';
import {useDispatch} from 'react-redux';
import {login, logout, signup} from '../store/user/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const snackbar = useContext(SnackbarContext);

  const auth = async (email, password, newUser = false) => {
    let authError = '';
    if (newUser) {
      authError = await dispatch(signup(email, password));
    } else {
      authError = await dispatch(login(email, password));
    }

    if (authError) {
      snackbar.show(authError);
    }
  };

  return {auth};
};
