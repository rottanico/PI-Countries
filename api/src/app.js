const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/index.js');
const errorHandler = require('./errors/errors')
const setHeaders= require('./config/config')
const savedb=require('./routes/savedb')
const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeaders)


server.use('/', router);
server.use(errorHandler)
module.exports = server;
