const jwt = require('jsonwebtoken')
const jwtSecretKey = process.env.JWT_SECRET_KEY;

exports.checkAuth = (req, res, next) => {

    const token = req.header('x-auth-token');

    if (req.method === 'OPTIONS') {
        res.status(200).send();
    } else {

        if (!token) {
            res.status(401).send({status: 'failed', message: 'No token'})
        } else { 

            try {
                jwt.verify(token, jwtSecretKey, (fail, decodedPayload) => {
                    if (fail) {
                        res.status(401).send({status: 'failed', message: 'Invalid token'})
                    } else {
                        req.userId = decodedPayload.id
                        next()
                    }
                })
            } catch(err) {
                //err
            }
        }
    }
}