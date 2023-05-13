import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { cauhoi } from './Question.js';
import { ketqua } from './Result.js';
export const cautraloi = sequelize.define(
    'cautraloi',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        thutucauhoi: Sequelize.STRING,
        cautraloi: Sequelize.STRING,
        id_cauhoi: Sequelize.INTEGER,
        id_ketqua: Sequelize.INTEGER
    },
    { timestamps: false, sequelize, modelName: 'cautraloi' }
);

ketqua.hasMany(cautraloi, { foreignKey: 'id_ketqua' });

cautraloi.belongsTo(ketqua, {
    foreignKey: 'id_ketqua'
});

cauhoi.hasMany(cautraloi, { foreignKey: 'id_cauhoi' });

cautraloi.belongsTo(cauhoi, {
    foreignKey: 'id_cauhoi'
});
