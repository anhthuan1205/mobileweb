var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var banks = require('./route/BankRoute');
var logger = require('./config/logger');

const port = 3000;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', banks);

app.listen(port, function() {
    logger.info('Server is running on port: ' + port);
})