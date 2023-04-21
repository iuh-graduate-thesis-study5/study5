import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_EXAM: 'FETCH_ALL_EXAM',
    CREATE: 'CREATE',
    FIND_BY_ID: 'FIND_BY_ID'
};

export const getAllExam = () => (dispatch) => {
    apiService
        .exam()
        .getAllExam()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_EXAM,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};

export const generateExam = (exam) => (dispatch) => {
    apiService
        .exam()
        .createExam(exam)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};
export const getExamById = (id) => (dispatch) => {
    apiService
        .exam()
        .getExamById(id)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.FIND_BY_ID,
                payload: response.data
            });
        })
        .catch((err) => console.log(err));
};