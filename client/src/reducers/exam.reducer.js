import { ACTION_TYPES } from '../actions/exam.action';

const initialState = {
    listExam: [],
    examById: {}
};

export const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_EXAM:
            return {
                ...state,
                listExam: [...action.payload]
            };
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                listExam: [...action.payload]
            };
        case ACTION_TYPES.FIND_BY_ID:
            return {
                ...state,
                examById: action.payload
            };
        default:
            return state;
    }
};
