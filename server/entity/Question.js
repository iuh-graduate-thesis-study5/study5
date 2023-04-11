import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { nhomcauhoi } from './GroupQuestion.js';
export const cauhoi = sequelize.define(
    'cauhoi',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        noidung: Sequelize.STRING,
        dapandung: Sequelize.STRING,
        id_nhomcauhoi: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'cauhoi' }
);

nhomcauhoi.hasMany(cauhoi, { foreignKey: 'id_nhomcauhoi' });
cauhoi.hasOne(nhomcauhoi, {
    foreignKey: 'id'
});
