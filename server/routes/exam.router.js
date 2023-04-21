import express from 'express';
import { generateExam, getAllExam, getExamById } from '../controllers/exam.controller.js';

const router = express.Router();

router.post('/generate-exam', generateExam);

router.get('/get-exam', getAllExam);
router.get('/get-exam-by-id/:id', getExamById);

export default router;
