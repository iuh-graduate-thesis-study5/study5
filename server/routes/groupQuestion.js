import express from 'express';
import { addGroupQuestion, getAllQuestion } from '../controllers/groupQuestion.js';

const router = express.Router();

router.get('/get-all-questions', getAllQuestion);

router.post('/add-group-question', addGroupQuestion);

export default router;
