require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, process.env.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, process.env.SALT_KEY);
    return data;
}

exports.authorize = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        return jwt.verify(token, process.env.SALT_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    message: 'Token inválido',
                    error: err
                });
            } else {
                next();
            }
        })
    }
}