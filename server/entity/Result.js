import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { dethithisinh } from './AccountQuestion.js';

export const ketqua = sequelize.define(
    'ketqua',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        tongdiem: Sequelize.INTEGER,
        socaudung: Sequelize.INTEGER,
        socausai: Sequelize.INTEGER,
        socauboqua: Sequelize.INTEGER,
        thoigiannopbai: {
            field: 'thoigiannopbai',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        id_dethiketqua: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'ketqua' }
);

dethithisinh.hasMany(ketqua, { foreignKey: 'id_dethiketqua' });

ketqua.belongsTo(dethithisinh, {
    foreignKey: 'id_dethiketqua'
});
