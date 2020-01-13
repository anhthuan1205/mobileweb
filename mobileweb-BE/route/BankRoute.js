var express = require('express');
var router = express.Router();
var bankController = require('../controller/BankController');

router.get('/allbanks', bankController.getAllBanks);

module.exports = router;