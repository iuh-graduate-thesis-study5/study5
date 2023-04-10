import apiService from '../services/api.service';

export const addAnswer = (answer) => {
    return apiService.answer().addAnswer(answer);
};
