import apiService from '../services/api.service';

export const ACTION_TYPES = {
    FETCH_ALL_ACCCOUNT: 'FETCH_ALL_ACCCOUNT'
};

export const createExamStudent = (exam) => {
    return apiService.examStudent().createExamStudent(exam);
};
