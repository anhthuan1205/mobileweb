var con = require('../config/Database');

exports.getAllBanks = function(req, res) {
    con.query('SELECT * FROM mobileweb.banks', function(err, result) {
        if (err) {
            console.log(err);
            res.status(404).json({
                'msg': err
            });
        } else {
            console.log("select all banks success.");
            res.status(200).send(result);
        };
    });
};

exports.getBankUsageAgreement = function(req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM mobileweb.bank_usage_agreements WHERE id=' + id;
    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            res.status(404).json({
                'msg': err
            });
        } else {
            console.log("select bank usage agreement success.");
            res.status(200).send(result);
        };
    })
};