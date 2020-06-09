import {combineReducers} from 'redux';
import {userReducer} from './user/reducer';
import {shopReducer} from './shop/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
});
