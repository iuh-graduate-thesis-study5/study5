import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const nhomcauhoi = sequelize.define(
    'nhomcauhoi',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        noidungcauhoi: Sequelize.TEXT,
        amthanh: Sequelize.STRING,
        hinhanh: Sequelize.STRING,
        phancauhoi: Sequelize.INTEGER,
        id_nguoitao: Sequelize.INTEGER,
        trangthai: Sequelize.INTEGER,
        ngaytao: {
            field: 'ngaytao',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    { timestamps: false, sequelize, modelName: 'nhomcauhoi' }
);
