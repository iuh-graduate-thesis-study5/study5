import { ACTION_TYPES } from '../actions/groupquestion.action';

const initialState = {
    listGroupQuestion: []
};

export const groupQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_GROUP_QUESTION:
            return {
                ...state,
                listGroupQuestion: [...action.payload]
            };
        case ACTION_TYPES.ADD_ANSWER:
            return {
                ...state,
                listGroupQuestion: [...action.payload]
            };
        default:
            return state;
    }
};
