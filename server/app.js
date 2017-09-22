'use strict';

const http = require('http');

const express = require('express');

const config = require('./config');
const faviconMiddleware = require('./favicon/favicon.middleware');
const staticMiddleware = require('./static/static.middleware');

const app = express();

if (process.env.NODE_ENV !== 'dev') {
    app.use(express.static(`${process.cwd()}/dist`));
}

app.use(faviconMiddleware);
app.use('/static', staticMiddleware);

const server = http.createServer(app);

server.listen(config.system.port);

module.exports = app;

