import express from 'express';
import { addQuestion } from '../controllers/question.js';

const router = express.Router();

router.post('/add-question', addQuestion);

export default router;
