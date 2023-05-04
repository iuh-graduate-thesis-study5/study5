import { db } from '../db.js';
import { nhomcauhoi } from '../entity/GroupQuestion.js';
import { cauhoi } from '../entity/Question.js';
import { dapan } from '../entity/Answer.js';
import { dethi } from '../entity/Exam.js';
import fs from 'fs';
import { dethicauhoi } from '../entity/ExamQuestion.js';
import { dethithisinh } from '../entity/AccountQuestion.js';
import { taikhoan } from '../entity/Account.js';
import { ketqua } from '../entity/Result.js';
import { cautraloi } from '../entity/ResultAnswer.js';
import { nguoidung } from '../entity/User.js';

export const addResult = (req, res) => {
    const listAnswer = req.body;
    let correctAnswer = 0;
    let wrongAnswer = 0;
    let skipAnswer = 0;
    listAnswer.forEach((e) => {
        if (!e.answer) {
            skipAnswer += 1;
        } else if (e.answer === e.dap_an_dung) {
            correctAnswer += 1;
        } else if (e.answer !== e.dap_an_dung) {
            wrongAnswer += 1;
        }
    });
    const rs = {
        tongdiem: correctAnswer * 5,
        socaudung: correctAnswer,
        socausai: wrongAnswer,
        socauboqua: skipAnswer,
        thoigiannopbai: Date.now(),
        id_dethiketqua: req.params.id
    };
    ketqua
        .create(rs)
        .then((rsl) => {
            const listAnswer_q = [];
            listAnswer.forEach((e) => {
                const answer_q = {
                    thutucauhoi: e.numberQuestion,
                    cautraloi: e.answer,
                    id_cauhoi: e.id_question,
                    id_ketqua: rsl.id
                };
                listAnswer_q.push(answer_q);
            });
            cautraloi
                .bulkCreate(listAnswer_q)
                .then((rss) => {
                    return res.status(200).json(rsl.id);
                })
                .catch((err) => {
                    return res.status(400).json({ err });
                });
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const getResult = (req, res) => {
    ketqua
        .findOne({
            include: [
                {
                    model: dethithisinh,
                    include: [
                        {
                            model: dethi
                        },
                        {
                            model: taikhoan,
                            include: [
                                {
                                    model: nguoidung
                                }
                            ]
                        }
                    ]
                },
                {
                    model: cautraloi,
                    include: [
                        {
                            model: cauhoi,
                            include: [
                                {
                                    model: dapan
                                },
                                { model: nhomcauhoi }
                            ]
                        }
                    ]
                }
            ],
            where: {
                id: req.params.id
            }
        })
        .then((users) => {
            return res.status(200).json(users);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const getResultByUserId = (req, res) => {
    ketqua
        .findAll({
            include: [
                {
                    model: dethithisinh,
                    include: [
                        {
                            model: dethi
                        },
                        {
                            model: taikhoan,
                            include: [
                                {
                                    model: nguoidung
                                }
                            ]
                        }
                    ],
                    where: {
                        id_thisinh: req.params.id
                    }
                }
            ]
        })
        .then((users) => {
            return res.status(200).json(users);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const getResultByUserExamId = (req, res) => {
    ketqua
        .findAll({
            include: [
                {
                    model: dethithisinh,
                    include: [
                        {
                            model: dethi
                        },
                        {
                            model: taikhoan,
                            include: [
                                {
                                    model: nguoidung
                                }
                            ]
                        }
                    ],
                    where: {
                        id_dethi: req.params.id
                    }
                }
            ]
        })
        .then((users) => {
            return res.status(200).json(users);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};
