var jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function  (req, res, next) {
    var token = req.body.token || req.headers['x-access-token'] || req.query.token;
    if(!token) {
        return res.status(404).send({error:'No token found'});
    } else {
        jwt.verify(token, process.env.SECRET, function(err, decode) {
            if(err) {
                return res.status(500).send({error:'Invalid token'});
            } else {
                decode = jwt.decode(token, {complete:true});
                console.log(decode.header);
                console.log(decode.payload);
                next();
            }
        });
    }
};
