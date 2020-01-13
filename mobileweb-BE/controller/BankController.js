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