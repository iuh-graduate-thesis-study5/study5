import { ACTION_TYPES } from '../actions/user.action';

const initialState = {
    listUser: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_USER:
            return {
                ...state,
                listUser: [...action.payload]
            };
        default:
            return state;
    }
};
