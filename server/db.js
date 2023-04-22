import mysql from 'mysql';
import { Sequelize } from 'sequelize';
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 's5test',

    multipleStatements: true
});
var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
};

export const sequelize = new Sequelize('mysql://root:password@localhost:3306/s5test', opts);
