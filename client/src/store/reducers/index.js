// third-party
import { combineReducers } from 'redux';

import { accountReducer } from 'reducers/account.reducer';
import { userReducer } from 'reducers/user.reducer';
import { questionReducer } from 'reducers/question.reducer';

// project import
import menu from './menu';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    menu: menu,
    account: accountReducer,
    user: userReducer,
    question: questionReducer
});

export default reducers;
