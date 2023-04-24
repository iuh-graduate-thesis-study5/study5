import { ACTION_TYPES } from '../actions/result.action';

const initialState = {
    result: null
};

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_RESULT:
            return {
                ...state,
                result: action.payload
            };
        default:
            return state;
    }
};
