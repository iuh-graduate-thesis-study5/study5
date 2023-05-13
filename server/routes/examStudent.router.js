import express from 'express';
import { createExamStudent } from '../controllers/examStudent.controller.js';

const router = express.Router();

router.post('/generate-exam-student', createExamStudent);

export default router;
