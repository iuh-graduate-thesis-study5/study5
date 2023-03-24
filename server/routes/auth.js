import express from 'express';
import { register, login, logout, getAllAccount } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/get-all-account', getAllAccount);

export default router;
