// third-party
import { combineReducers } from 'redux';

import { accountReducer } from 'reducers/account.reducer';
import { userReducer } from 'reducers/user.reducer';
// project import
import menu from './menu';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    menu: menu,
    account: accountReducer,
    user: userReducer
});

export default reducers;
