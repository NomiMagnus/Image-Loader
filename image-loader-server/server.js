const cors = require("cors");
const express = require('express');
require('dotenv').config();
const path = require('path');

const router = require('./router');
const app = express();
const { HOST, PORT, CLIENT_PORT } = process.env;

const corsOptions = {
    origin: [`http://${HOST}:${CLIENT_PORT}`],
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type,Authorization',
    preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
