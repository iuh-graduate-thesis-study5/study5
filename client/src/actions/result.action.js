import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_ACCCOUNT: 'FETCH_ALL_ACCCOUNT',
    GET_RESULT: 'GET_RESULT'
};

export const addResult = (rs) => {
    return apiService.result().createResult(rs);
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
