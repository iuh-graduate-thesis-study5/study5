import { db } from '../db.js';

export const addQuestion = (req, res) => {
    const q = 'INSERT INTO cauhoi(`noidung`, `dapandung`, `id_nhomcauhoi`) VALUES (?)';

    const values = [req.body.noidung, req.body.dapandung, req.body.id_nhomcauhoi];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};
