import { combineReducers } from 'redux';

import products from './products';
import filters from './filters';
import cart from './cart';
import favorites from './favorites';

export const rootReducer = combineReducers({
    products,
    filters,
    cart,
    favorites,
});
