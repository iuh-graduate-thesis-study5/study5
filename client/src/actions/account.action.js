import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_ACCCOUNT: 'FETCH_ALL_ACCCOUNT'
};
export const test = () => (dispatch) => {
    apiService
        .account()
        .fetchAll()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_ACCCOUNT,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
export const login = (account) => {
    return apiService.account().login(account);
};
