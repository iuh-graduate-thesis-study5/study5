import express from 'express';
import {
    generateExam,
    getAllExam,
    getExamById,
    getExamByUserId,
    getExamUser,
    deleteExam,
    updateExam
} from '../controllers/exam.controller.js';

const router = express.Router();

router.post('/generate-exam', generateExam);

router.get('/get-exam', getAllExam);
router.get('/get-exam-by-id/:id', getExamById);
router.get('/get-exam-by-user-id/:id', getExamByUserId);
router.post('/get-exam-user', getExamUser);
router.post('/update-exam/:id', updateExam);
router.delete('/delete-exam/:id', deleteExam);

export default router;
