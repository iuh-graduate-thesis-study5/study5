import { db } from '../db.js';

export const getUser = (req, res) => {
    //CHECK USER
    const q = 'SELECT * FROM nguoidung';
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const addGroupQuestion = (req, res) => {
    console.log('a');
    const q = 'INSERT INTO nhomcauhoi(`noidungcauhoi`, `hinhanh`, `amthanh`, `id_nguoitao`) VALUES (?)';
    console.log('a');

    const values = [req.body.noidungcauhoi, req.body.hinhanh, req.body.amthanh, req.body.id_nguoitao];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

// export const userNotAccount = (req, res) => {
//     const q = 'SELECT * FROM nguoidung u WHERE NOT EXISTS(SELECT * FROM taikhoan a WHERE a.id_nguoidung = u.id)';
//     db.query(q, (err, data) => {
//         if (err) return res.status(500).send(err);
//         return res.status(200).json(data);
//     });
// };
