import apiService from '../services/api.service';

export const ACTION_TYPES = {
    CHOOSE_QUESTION: 'CHOOSE_QUESTION'
};
export const chooseQuestion = (a) => (dispatch) => {
    console.log(a);
    dispatch({
        type: ACTION_TYPES.CHOOSE_QUESTION,
        payload: [...a]
    });
};
