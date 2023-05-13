import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { taikhoan } from './Account.js';
import { dethi } from './Exam.js';
export const dethithisinh = sequelize.define(
    'dethithisinh',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_thisinh: Sequelize.INTEGER,
        id_dethi: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'dethithisinh' }
);

taikhoan.hasMany(dethithisinh, { foreignKey: 'id_thisinh' });
dethithisinh.belongsTo(taikhoan, {
    foreignKey: 'id_thisinh'
});
dethi.hasMany(dethithisinh, { foreignKey: 'id_dethi' });
dethithisinh.belongsTo(dethi, {
    foreignKey: 'id_dethi'
});
