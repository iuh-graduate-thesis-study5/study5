import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    //CHECK EXISTING USER
    const q = 'SELECT * FROM taikhoan WHERE tentaikhoan = ?';

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json('User already exists!');

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.matkhau, salt);

        const q = 'INSERT INTO taikhoan(`tentaikhoan`,`matkhau`,`quyen`,`trangthai`,`id_nguoidung`) VALUES (?)';
        const values = [req.body.tentaikhoan, hash, req.body.quyen, req.body.trangthai, req.body.id_nguoidung];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return getAllAccount(req, res);
        });
    });
};

export const login = (req, res) => {
    //CHECK USER

    const q = 'SELECT * FROM taikhoan WHERE tentaikhoan = ?';
    db.query(q, [req.body.tentaikhoan], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(200).json('User not found!');

        //Check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.matkhau, data[0].matkhau);

        if (!isPasswordCorrect) return res.status(200).json('Wrong username or password!');

        // const token = jwt.sign({ id: data[0].id }, 'jwtkey');
        // const { password, ...other } = data[0];

        // res.cookie('access_token', token, {
        //     httpOnly: true
        // })
        //     .status(200)
        //     .json(other);
        return res.status(200).json(data);
    });
};

export const logout = (req, res) => {
    res.clearCookie('access_token', {
        sameSite: 'none',
        secure: true
    })
        .status(200)
        .json('User has been logged out.');
};

export const getAllAccount = (req, res) => {
    //CHECK USER

    const q = 'SELECT * FROM taikhoan';
    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const updateAccount = (req, res) => {
    //CHECK USER

    const userId = req.params.id;
    const q = 'UPDATE taikhoan SET `quyen`=?,`trangthai`=? WHERE `id` = ?';

    const values = [req.body.quyen, req.body.trangthai];

    db.query(q, [...values, userId], (err, data) => {
        if (err) return res.status(500).json(err);
        return getAllAccount(req, res);
    });
};
