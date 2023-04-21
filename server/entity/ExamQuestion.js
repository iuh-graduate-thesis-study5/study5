import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { nhomcauhoi } from './GroupQuestion.js';
import { dethi } from './Exam.js';
export const dethicauhoi = sequelize.define(
    'dethicauhoi',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_nhomcauhoi: Sequelize.INTEGER,
        id_dethi: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'dethicauhoi' }
);

nhomcauhoi.hasMany(dethicauhoi, { foreignKey: 'id_nhomcauhoi' });
dethicauhoi.belongsTo(nhomcauhoi, {
    foreignKey: 'id_nhomcauhoi'
});
dethi.hasMany(dethicauhoi, { foreignKey: 'id_dethi' });
dethicauhoi.hasOne(dethi, {
    foreignKey: 'id'
});
