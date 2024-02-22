const { Sequelize } = require("sequelize");
const personModel = require("../models/person.model");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.SQL_PORT,
        dialect: process.env.DIALECT,
        dialectOptions: {
            options: { encrypt: false },
        },
    }
);

const db = {};
db.Person = personModel(sequelize);
// sync all models with database
sequelize.sync({ alter: true });

module.exports = db;