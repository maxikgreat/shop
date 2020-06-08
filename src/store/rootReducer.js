import {combineReducers} from 'redux';
import {shoppingCartReducer} from './shoppingCart/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});
