import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_ACCCOUNT: 'FETCH_ALL_ACCCOUNT',
    REGISTER: 'REGISTER'
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

export const register = (account) => (dispatch) => {
    apiService
        .account()
        .register(account)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.REGISTER,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
