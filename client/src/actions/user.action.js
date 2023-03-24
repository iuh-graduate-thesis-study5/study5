import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_USER: 'FETCH_ALL_USER'
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
