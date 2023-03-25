import express from 'express';
import { addUser, getUser, userNotAccount } from '../controllers/user.js';

const router = express.Router();

router.get('/get-all-user', getUser);
router.post('/add-user', addUser);
router.get('/user-not-account', userNotAccount);

export default router;
