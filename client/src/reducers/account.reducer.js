import { ACTION_TYPES } from '../actions/account.action';

const userAuth = JSON.parse(localStorage.getItem('authenticate')).id;

const initialState = {
    isAuthenticated: null,
    listAccount: [],
    account: null,
    hashPass: null,
    userAuth: userAuth
};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_ACCCOUNT:
            return {
                ...state,
                listAccount: [...action.payload]
            };
        case ACTION_TYPES.REGISTER:
            return {
                ...state,
                listAccount: [...action.payload]
            };
        case ACTION_TYPES.UPDATE_ACCOUNT:
            return {
                ...state,
                listAccount: [...action.payload]
            };
        case ACTION_TYPES.GET_ACCOUNT:
            return {
                ...state,
                account: action.payload
            };
        default:
            return state;
    }
};
