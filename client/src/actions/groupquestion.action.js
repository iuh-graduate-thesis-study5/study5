import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_GROUP_QUESTION: 'FETCH_ALL_GROUP_QUESTION',
    ADD_ANSWER: 'ADD_ANSWER'
};

export const addGroupQuestion = (groupQuestion) => {
    return apiService.groupQuestion().addGroupQuestion(groupQuestion);
};
export const addAnswer = (answer) => (dispatch) => {
    apiService
        .answer()
        .addAnswer(answer)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.ADD_ANSWER,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};

export const getAllGroupQuestion = () => (dispatch) => {
    apiService
        .groupQuestion()
        .listGroupQuestion()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_GROUP_QUESTION,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
