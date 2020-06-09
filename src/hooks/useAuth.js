import {useContext, useState} from 'react';
import {SnackbarContext} from '../context/SnackbarContext';
import {useDispatch} from 'react-redux';
import {login, logout, signup, autoLogin} from '../store/user/actions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const snackbar = useContext(SnackbarContext);
  const [loading, setLoading] = useState(false);

  const auth = async (email, password, newUser = false) => {
    setLoading(true);
    let authError = '';
    if (newUser) {
      authError = await dispatch(signup(email, password));
    } else {
      authError = await dispatch(login(email, password));
    }

    if (authError) {
      snackbar.show(authError);
    }
    setLoading(false);
  };

  const autoAuth = async () => {
    setLoading(true);
    let authError = '';
    authError = await dispatch(autoLogin());
    if (authError) {
      snackbar.show(authError);
    }
    setLoading(false);
  };

  return {auth, autoAuth, loading};
};
