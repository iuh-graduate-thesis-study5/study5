import { ACTION_TYPES } from '../actions/user.action';

const initialState = {
    listUser: [],
    listUserNotAccount: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_USER:
            return {
                ...state,
                listUser: [...action.payload]
            };
        case ACTION_TYPES.USER_NOT_ACCOUNT:
            return {
                ...state,
                listUserNotAccount: [...action.payload]
            };
        default:
            return state;
    }
};
