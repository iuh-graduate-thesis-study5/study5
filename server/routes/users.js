import express from 'express';
import { addUser, getUser } from '../controllers/user.js';

const router = express.Router();

router.get('/get-all-user', getUser);
router.post('/add-user', addUser);

export default router;
