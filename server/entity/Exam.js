import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const dethi = sequelize.define(
    'dethi',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        madethi: Sequelize.STRING,
        tieude: Sequelize.STRING,
        mota: Sequelize.STRING,
        loaidethi: Sequelize.INTEGER,
        id_nguoitao: Sequelize.INTEGER,
        ngaytao: {
            field: 'ngaytao',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        thoigianthi: {
            field: 'thoigianthi',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    { timestamps: false, sequelize, modelName: 'dethi' }
);
