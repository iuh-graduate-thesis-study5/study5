import express from 'express';
import { addUser, getUser, userNotAccount, register, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/get-all-user', getUser);
router.post('/add-user', addUser);
router.get('/user-not-account', userNotAccount);
router.post('/register', register);
router.put('/update-user/:id', updateUser);

export default router;
