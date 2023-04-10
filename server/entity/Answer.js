import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { cauhoi } from './Question.js';
export const dapan = sequelize.define(
    'dapan',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        noidung: Sequelize.STRING,
        loaidapan: Sequelize.STRING,
        dapanthu: Sequelize.STRING,
        id_cauhoi: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'dapan' }
);

cauhoi.hasMany(dapan, { foreignKey: 'id_cauhoi' });
dapan.hasOne(cauhoi, {
    foreignKey: 'id'
});
