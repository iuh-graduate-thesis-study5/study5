import express from 'express';
import { addGroupQuestion, getAllQuestion, deleteQuestion } from '../controllers/groupQuestion.js';

const router = express.Router();

router.get('/get-all-questions', getAllQuestion);
router.post('/add-group-question', addGroupQuestion);
router.post('/delete-question/:id', deleteQuestion);

export default router;
