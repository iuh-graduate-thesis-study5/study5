import apiService from '../services/api.service';

export const upload = (formData) => {
    return apiService.upload().uploadFile(formData);
};
