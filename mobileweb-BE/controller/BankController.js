var con = require('../config/Database');
var logger = require('../config/Logger');

exports.getAllBanks = function(req, res) {
    var sql = 'SELECT * FROM mobileweb.banks';
    logger.info(sql);
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            res.status(404).json({
                'msg': err
            });
        } else {
            logger.info("select all banks success.");
            return res.status(200).send(result);
        }
    });
};

exports.getBankUsageAgreement = function(req, res) {
    var id = req.params.id;
    logger.info("Request param id: " + id);
    var sql = 'SELECT * FROM mobileweb.bank_usage_agreements WHERE bank_id=' + id;
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            res.status(404).json({
                'msg': err
            });
        } else {
            logger.info("select bank usage agreement success.");
            return res.status(200).send(result[0]);
        }
    })
};
