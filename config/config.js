const dotenv = require('dotenv');
dotenv.config();

const config = {
    development: {
        url: process.env.DATABASE_URL_DEV,
    },
    test: {
        url: process.env.DATABASE_URL_TEST,
    },
    production: {
        url: process.env.DATABASE_URL_PROD,
    },
};

module.exports = config;
