import { db } from '../db.js';
import { nhomcauhoi } from '../entity/GroupQuestion.js';
import { cauhoi } from '../entity/Question.js';
import { dapan } from '../entity/Answer.js';
export const getAllQuestion = (req, res) => {
    nhomcauhoi
        .findAll({
            include: [
                {
                    model: cauhoi,
                    include: [
                        {
                            model: dapan
                        }
                    ]
                }
            ],
            order: [['phancauhoi', 'ASC']]
        })
        .then((users) => {
            return res.status(200).json(users);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const addGroupQuestion = (req, res) => {
    const q = 'INSERT INTO nhomcauhoi(`noidungcauhoi`, `hinhanh`, `amthanh`, `phancauhoi`,`id_nguoitao`) VALUES (?)';
    const values = [req.body.noidungcauhoi, req.body.hinhanh, req.body.amthanh, req.body.phancauhoi, req.body.id_nguoitao];

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
