import express from 'express';
import { addResult, getResult, getResultByUserId, getResultByUserExamId } from '../controllers/result.controller.js';

const router = express.Router();

router.post('/add-result/:id', addResult);
router.get('/get-result/:id', getResult);
router.get('/get-result-by-user-id/:id', getResultByUserId);
router.get('/get-result-by-exam-id/:id', getResultByUserExamId);

export default router;
