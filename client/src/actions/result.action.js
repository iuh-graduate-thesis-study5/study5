import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_ACCCOUNT: 'FETCH_ALL_ACCCOUNT',
    GET_RESULT: 'GET_RESULT',
    GET_RESULT_BY_USER_ID: 'GET_RESULT_BY_USER_ID',
    GET_RESULT_BY_EXAM_ID: 'GET_RESULT_BY_EXAM_ID'
};

export const addResult = (rs, id) => {
    return apiService.result().createResult(rs, id);
};

export const getResult = (id) => (dispatch) => {
    apiService
        .result()
        .getResult(id)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_RESULT,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
export const getResultByUserId = (id) => (dispatch) => {
    apiService
        .result()
        .getResultByUserId(id)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_RESULT_BY_USER_ID,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
export const getResultByExamId = (id) => (dispatch) => {
    apiService
        .result()
        .getResultByExamId(id)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_RESULT_BY_EXAM_ID,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
