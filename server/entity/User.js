import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { cauhoi } from './Question.js';
import { dethi } from './Exam.js';
import { taikhoan } from './Account.js';
export const nguoidung = sequelize.define(
    'nguoidung',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        tennguoidung: Sequelize.STRING,
        email: Sequelize.STRING,
        sodienthoai: Sequelize.INTEGER,
        gioitinh: Sequelize.STRING,
        diachi: Sequelize.STRING,
        ngaytao: {
            field: 'ngaytao',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    { timestamps: false, sequelize, modelName: 'nguoidung' }
);

nguoidung.hasMany(taikhoan, { foreignKey: 'id_nguoidung' });

taikhoan.belongsTo(nguoidung, {
    foreignKey: 'id_nguoidung'
});
