import { db } from '../db.js';

export const getUser = (req, res) => {
    //CHECK USER
    const q = 'SELECT * FROM nguoidung';
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = 'INSERT INTO nguoidung(`tennguoidung`, `email`, `sodienthoai`, `gioitinh`, `diachi`) VALUES (?)';

    const values = [req.body.tennguoidung, req.body.email, req.body.sodienthoai, req.body.gioitinh, req.body.diachi];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return getUser(req, res);
    });
};
