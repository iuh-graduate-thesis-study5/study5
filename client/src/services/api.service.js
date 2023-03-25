import axios from 'axios';

const baseApi = 'http://localhost:8800/api/';

export default {
    account(url = baseApi + 'account/') {
        return {
            fetchAll: () => axios.get(url + 'get-all-account'),
            login: (account) => axios.post(url + 'login', account),
            register: (account) => axios.post(url + 'register', account)
            // register: (account) => axios.post(url + 'employee/register', account),
            // addAccoutNv: (account) => axios.put(url + 'register', account),
            // add_admin: (admin) => axios.post(url + 'add-admin', admin),
            // resetPass: (acc) => axios.put(url + 'reset-password', acc),
            // updateStatus: (acc) => axios.put(url + 'update', acc),
            // getById: (id) => axios.get(url + id),
            // hashPass: (taikhoan, pass) => axios.post(url + 'hashPass/' + pass, taikhoan),
            // forget: (tk) => axios.put(url + 'forget', tk)
        };
    },
    user(url = baseApi + 'users/') {
        return {
            fetchAllUser: () => axios.get(url + 'get-all-user'),
            fetchAllUserNotAccount: () => axios.get(url + 'user-not-account')
        };
    }
};
