import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { cauhoi } from './Question.js';
import { dethi } from './Exam.js';
export const taikhoan = sequelize.define(
    'taikhoan',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        tentaikhoan: Sequelize.STRING,
        matkhau: Sequelize.STRING,
        trangthai: Sequelize.INTEGER,
        id_nguoidung: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'taikhoan' }
);

taikhoan.hasMany(dethi, { foreignKey: 'id_nguoitao' });

dethi.belongsTo(taikhoan, {
    foreignKey: 'id_nguoitao'
});
