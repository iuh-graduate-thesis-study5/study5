import express from 'express';
import { register, login, logout, getAllAccount, updateAccount, getAccount } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.put('/:id', updateAccount);
router.get('/get-all-account', getAllAccount);
router.get('/get-account/:id', getAccount);

export default router;
