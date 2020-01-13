var express = require('express');
var router = express.Router();
var bankController = require('../controller/BankController');
var verifyToken = require('../config/JwtVerify');

router.get('/allbanks', bankController.getAllBanks);
router.get('/bank/:id', bankController.getBankUsageAgreement);

module.exports = router;