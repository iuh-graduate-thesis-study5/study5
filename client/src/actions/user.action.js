import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_USER: 'FETCH_ALL_USER',
    USER_NOT_ACCOUNT: 'USER_NOT_ACCOUNT'
};
export const getAllUser = () => (dispatch) => {
    apiService
        .user()
        .fetchAllUser()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_USER,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};

export const getUserNotAccount = () => (dispatch) => {
    apiService
        .user()
        .fetchAllUserNotAccount()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.USER_NOT_ACCOUNT,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
