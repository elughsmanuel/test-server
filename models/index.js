const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const config = require('../config/config');

let sequelize;

if(config.development) {
    sequelize = new Sequelize(
        process.env.DATABASE_URL_DEV,
    );
} else if(config.test) {
    sequelize = new Sequelize(
        process.env.DATABASE_URL_TEST,
    );
} else if(config.production) {
    sequelize = new Sequelize(
        process.env.DATABASE_URL_PROD,
    );
}

module.exports = sequelize;
