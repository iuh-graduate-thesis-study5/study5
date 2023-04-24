import express from 'express';
import { addResult, getResult } from '../controllers/result.controller.js';

const router = express.Router();

router.post('/add-result', addResult);
router.get('/get-result/:id', getResult);

export default router;
