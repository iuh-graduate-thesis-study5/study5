import express from 'express';
import { register, login, logout, getAllAccount, updateAccount } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.put('/:id', updateAccount);
router.get('/get-all-account', getAllAccount);

export default router;
