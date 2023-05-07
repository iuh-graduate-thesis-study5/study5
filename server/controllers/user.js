import { where } from 'sequelize';
import { db } from '../db.js';
import { nguoidung } from '../entity/User.js';
import { getAccount } from './auth.js';

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
export const updateUser = (req, res) => {
    nguoidung
        .update(req.body, { where: { id: req.params.id } })
        .then((rs) => {
            return getUser(req, res);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};
export const register = (req, res) => {
    nguoidung
        .create(req.body)
        .then((rs) => {
            return res.status(200).json(rs);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const userNotAccount = (req, res) => {
    const q = 'SELECT * FROM nguoidung u WHERE NOT EXISTS(SELECT * FROM taikhoan a WHERE a.id_nguoidung = u.id)';
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};
