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
    }
};
