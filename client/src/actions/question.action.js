import apiService from '../services/api.service';

export const ACTION_TYPES = {
    CHOOSE_QUESTION: 'CHOOSE_QUESTION'
};
export const chooseQuestion = (a) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.CHOOSE_QUESTION,
        payload: [...a]
    });
};

export const addQuestion = (question) => {
    return apiService.question().addQuestion(question);
};
