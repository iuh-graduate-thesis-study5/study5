import { db } from '../db.js';
import { getAllQuestion } from './groupQuestion.js';

export const addAnswer = (req, res) => {
    const q = 'INSERT INTO dapan(`noidung`, `loaidapan`,`dapanthu`, `id_cauhoi`) VALUES (?)';

    const values = [req.body.noidung, req.body.loaidapan, req.body.dapanthu, req.body.id_cauhoi];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return getAllQuestion(req, res);
    });
};