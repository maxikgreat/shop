import {useState} from 'react';
import validator from 'validator';

export const useValidator = () => {
  const [error, setError] = useState({});

  const validateLogin = (email, password) => {

  };

  const validateSignup = (email, password, confirmPassword) => {
    setError({});
    const localError = {};
    if (!email) {
      localError.email = 'Field is required';
    }
    if (email && !validator.isEmail(email)) {
      localError.email = 'Incorrect email address';
    }
    if (!password) {
      localError.password = 'Field is required';
    }
    if (!confirmPassword) {
      localError.confirmPassword = 'Filed is required';
    }
    setError(localError);
  };

  return {error, validateLogin, validateSignup};
}