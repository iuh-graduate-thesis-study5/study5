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

export const generateExam = (req, res) => {
    const today = new Date();
    const date = '' + today.getFullYear() + (today.getMonth() + 1) + today.getDate();
    const time = '' + today.getHours() + today.getMinutes() + today.getSeconds();
    let dateTime = date + time;
    for (let i = 0; i < 18 - dateTime.length; i++) {
        dateTime = dateTime + '0';
    }
    req.body.madethi = 'EXAM-' + dateTime;
    dethi
        .create(req.body)
        .then((rs) => {
            nhomcauhoi
                .findAll({
                    attributes: ['id', 'phancauhoi'],
                    order: [['phancauhoi', 'ASC']]
                })
                .then((question) => {
                    const part1 = [];
                    const part2 = [];
                    const part3 = [];
                    const part4 = [];
                    const part5 = [];
                    const part6 = [];
                    const part7 = [];
                    JSON.parse(JSON.stringify(question)).forEach((e) => {
                        if (e.phancauhoi === 1) {
                            part1.push(e.id);
                        } else if (e.phancauhoi === 2) {
                            part2.push(e.id);
                        } else if (e.phancauhoi === 3) {
                            part3.push(e.id);
                        } else if (e.phancauhoi === 4) {
                            part4.push(e.id);
                        } else if (e.phancauhoi === 5) {
                            part5.push(e.id);
                        } else if (e.phancauhoi === 6) {
                            part6.push(e.id);
                        } else if (e.phancauhoi === 7) {
                            part7.push(e.id);
                        }
                    });
                    const list_create = [];
                    const list_part = [part1, part2, part3, part4, part5, part6, part7];
                    list_part.forEach((e) => {
                        const list_add = [];
                        const list_number = [];
                        while (list_add.length < 3) {
                            const num = Math.floor(Math.random() * e.length);
                            if (!list_number.includes(e[num])) {
                                list_number.push(e[num]);
                                list_add.push({ id_dethi: rs.id, id_nhomcauhoi: e[num] });
                            }
                        }
                        list_create.push(...list_add);
                    });
                    dethicauhoi
                        .bulkCreate(list_create)
                        .then((rss) => {
                            if (req.body.listStudent && req.body.listStudent.length > 0) {
                                const listStudent = [];
                                req.body.listStudent.forEach((e) => {
                                    listStudent.push({ id_dethi: rs.id, id_thisinh: e });
                                });
                                dethithisinh
                                    .bulkCreate(listStudent)
                                    .then((rs) => {
                                        getAllExam(req, res);
                                    })
                                    .catch((err) => {
                                        return res.status(400).json({ err });
                                    });
                            } else {
                                getAllExam(req, res);
                            }
                        })
                        .catch((err) => {
                            return res.status(400).json({ err });
                        });
                })
                .catch((err) => {
                    return res.status(400).json({ err });
                });
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const getAllExam = (req, res) => {
    dethi
        .findAll({
            include: [
                {
                    model: taikhoan
                },
                {
                    model: dethithisinh
                }
            ]
        })
        .then((exam) => {
            return res.status(200).json(exam);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const getExamById = (req, res) => {
    dethi
        .findOne({
            include: [
                {
                    model: taikhoan,
                    include: [
                        {
                            model: nguoidung
                        }
                    ]
                },
                {
                    model: dethicauhoi,
                    include: [
                        {
                            model: nhomcauhoi,
                            include: [
                                {
                                    model: cauhoi,
                                    include: [
                                        {
                                            model: dapan,
                                            order: [{ model: dapan }, 'dapanthu', 'DESC']
                                        }
                                    ]
                                }
                            ],
                            order: [['phancauhoi', 'ASC']]
                        }
                    ]
                },
                {
                    model: dethithisinh,
                    include: [
                        {
                            model: taikhoan
                        }
                    ]
                }
            ],
            where: {
                id: req.params.id
            }
        })
        .then((exam) => {
            return res.status(200).json(exam);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};

export const getExamByUserId = (req, res) => {
    dethi
        .findAll({
            include: [
                {
                    model: taikhoan
                },
                {
                    model: dethithisinh,
                    include: [
                        {
                            model: taikhoan
                        }
                    ],
                    where: {
                        id_thisinh: req.params.id
                    }
                }
            ]
        })
        .then((exam) => {
            return res.status(200).json(exam);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};
export const getExamUser = (req, res) => {
    console.log(req);
    dethithisinh
        .findOne({
            where: {
                id_dethi: req.body.id_dethi,
                id_thisinh: req.body.id_thisinh
            }
        })
        .then((exam) => {
            return res.status(200).json(exam);
        })
        .catch((err) => {
            return res.status(400).json({ err });
        });
};
