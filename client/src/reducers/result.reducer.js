import { ACTION_TYPES } from '../actions/result.action';

const initialState = {
    result: null,
    listResultByUserId: [],
    listResultByExamId: []
};

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_RESULT:
            return {
                ...state,
                result: action.payload
            };
        case ACTION_TYPES.GET_RESULT_BY_USER_ID:
            return {
                ...state,
                listResultByUserId: [...action.payload]
            };
        case ACTION_TYPES.GET_RESULT_BY_EXAM_ID:
            return {
                ...state,
                listResultByExamId: [...action.payload]
            };
        default:
            return state;
    }
};
