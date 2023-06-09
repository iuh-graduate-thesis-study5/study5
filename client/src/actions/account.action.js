import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_ACCCOUNT: 'FETCH_ALL_ACCCOUNT',
    REGISTER: 'REGISTER',
    UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
    GET_ACCOUNT: 'GET_ACCOUNT',
    AUTHENTICATE_SIGNAL: 'AUTHENTICATE_SIGNAL',
    LOGOUT: 'LOGOUT',
    UPDATE_ACCOUNT_USER: 'UPDATE_ACCOUNT_USER'
};
export const isAuthenticated = (userExitedid) => {
    return {
        type: ACTION_TYPES.AUTHENTICATE_SIGNAL,
        userExitedid: userExitedid
    };
};
export const Logout = () => {
    localStorage.removeItem('user_authenticated');
    return {
        type: ACTION_TYPES.AUTHENTICATE_SIGNAL
    };
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
export const updateAccount = (account, id) => (dispatch) => {
    apiService
        .account()
        .editAccount(account, id)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.UPDATE_ACCOUNT,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
export const getAccount = (id) => (dispatch) => {
    apiService
        .account()
        .getAccount(id)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.GET_ACCOUNT,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};

export const updateAccountInfo = (account, id, id_user) => (dispatch) => {
    apiService
        .account()
        .updateAccount(account, id, id_user)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.UPDATE_ACCOUNT_USER,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
