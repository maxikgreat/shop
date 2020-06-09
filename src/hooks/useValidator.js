import {useState} from 'react';
import validator from 'validator';

export const useValidator = (confirmAction) => {
  const [error, setError] = useState({});

  const checkErrors = (errors) => {
    if (Object.keys(errors).length === 0) {
      confirmAction();
    }
  };

  const validateLogin = (email, password) => {
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
    if (password && !validator.isLength(password, {min: 6})) {
      localError.password = 'Min. 6 characters required';
    }
    setError(localError);

    checkErrors(localError);
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
    if (password && !validator.isLength(password, {min: 6})) {
      localError.password = 'Min. 6 characters required';
    }
    if (!confirmPassword) {
      localError.confirmPassword = 'Filed is required';
    }
    if (confirmPassword && !validator.equals(password, confirmPassword)) {
      localError.confirmPassword = 'Passwords are not equal';
    }
    setError(localError);

    checkErrors(localError);
  };

  return {error, validateLogin, validateSignup};
}