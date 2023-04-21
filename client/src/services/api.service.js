import axios from 'axios';

const baseApi = 'http://localhost:8800/api/';

export default {
    account(url = baseApi + 'account/') {
        return {
            fetchAll: () => axios.get(url + 'get-all-account'),
            login: (account) => axios.post(url + 'login', account),
            register: (account) => axios.post(url + 'register', account),
            editAccount: (account, id) => axios.put(url + id, account)
        };
    },
    user(url = baseApi + 'users/') {
        return {
            fetchAllUser: () => axios.get(url + 'get-all-user'),
            fetchAllUserNotAccount: () => axios.get(url + 'user-not-account'),
            addUser: (user) => axios.post(url + 'add-user', user)
        };
    },
    question(url = baseApi + 'question/') {
        return {
            addQuestion: (question) => axios.post(url + 'add-question', question)
        };
    },
    groupQuestion(url = baseApi + 'groupquestion/') {
        return {
            addGroupQuestion: (groupQuestion) => axios.post(url + 'add-group-question', groupQuestion),
            listGroupQuestion: () => axios.get(url + 'get-all-questions')
        };
    },
    answer(url = baseApi + 'answer/') {
        return {
            addAnswer: (answer) => axios.post(url + 'add-answer', answer)
        };
    },
    upload(url = baseApi + 'upload/') {
        return {
            uploadFile: (formData) => axios.post(url, formData)
        };
    },
    exam(url = baseApi + 'exam/') {
        return {
            getAllExam: () => axios.get(url + '/get-exam'),
            getExamById: (id) => axios.get(url + '/get-exam-by-id/' + id),
            createExam: (exam) => axios.post(url + '/generate-exam', exam)
        };
    }
};
