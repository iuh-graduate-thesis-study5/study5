import { ACTION_TYPES } from '../actions/account.action';

const initialState = {
    isAuthenticated: null,
    listAccount: [],
    account: null,
    hashPass: null
};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_ACCCOUNT:
            return {
                ...state,
                listAccount: [...action.payload]
            };
        default:
            return state;
    }
};
