const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const bodyParser = require('body-parser');
const sequelize = require('./models');
const product = require('./routers/productRouter');

const app = express();
const host = process.env.HOST || localhost;
const port = process.env.PORT || 8000;
const httpServer = http.createServer(app);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data:  `${ReasonPhrases.OK} : Homepage`,
    });
});

app.get('/api', (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data:  `${ReasonPhrases.OK} : API`,
    });
});

app.get('/api/v1', (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data:  `${ReasonPhrases.OK} : API - v1`,
    });
});

app.use('/api/v1/products', product);

app.get('*', (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: false,
        data:  `Can't find ${req.originalUrl} on this server.`,
    });
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log(`[DATABASE] - Database connection has been successfully established.`);

        try {
            httpServer.listen(port, host, () => {
                console.log(`[SERVER] - Server is listening on http://${host}:${port}`);
            })
        } catch (error) {
            console.log(`[SERVER] - Failed to start. Encountered an error during startup.`, error);
        }
    } catch (error) {
        console.log(`[DATABASE] - Server not started due to database connection error.`, error);
    }

};

startServer();

module.exports = app;
