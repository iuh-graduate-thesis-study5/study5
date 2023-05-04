import { db } from '../db.js';
import { nhomcauhoi } from '../entity/GroupQuestion.js';
import { cauhoi } from '../entity/Question.js';
import { dapan } from '../entity/Answer.js';
import { dethi } from '../entity/Exam.js';
import fs from 'fs';
import { dethicauhoi } from '../entity/ExamQuestion.js';
import { dethithisinh } from '../entity/AccountQuestion.js';
import { taikhoan } from '../entity/Account.js';
import { nguoidung } from '../entity/User.js';

export const createExamStudent = (req, res) => {
    dethithisinh
        .create(req.body)
        .then((rs) => {
            return res.status(200).json(rs);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};
