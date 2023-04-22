import { ACTION_TYPES } from '../actions/question.action';

const listChooseQuestion = [];
for (let i = 1; i <= 51; i++) {
    const question = {
        numberQuestion: i,
        isChoosen: false,
        answer: '',
        className: 'inputColor'
    };
    listChooseQuestion.push(question);
}
const initialState = {
    listDefaultChoosenQuestion: listChooseQuestion
};

export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHOOSE_QUESTION:
            return {
                ...state,
                listDefaultChoosenQuestion: [...action.payload]
            };
        default:
            return state;
    }
};
