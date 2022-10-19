const jwt = require('jsonwebtoken')
const db = require('../data')
const User = db.user
const Role = db.role

const verifyToken = (req, res, next) => {
    let accessToken = req.cookies?.act

    console.log(req.cookies);

    if (!accessToken) {
        return res.status(403).send({ message: 'No token provided!' })
    }

    jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY, (err, decoded) => {
        console.log('verify', decoded, err);
        if (err) {
            return res.status(401).send({ message: 'Unauthorized!' })
        }
        req.userId = decoded.id
        next()
    })
}

const isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return;
        }

        Role.findOne({
            _id: user.role
        }, (err, role) => {
            if (err) {
                res.status(500).send({ message: err })
                return;
            }

            if (role.name === 'admin') {
                next()
                return
            }

            res.status(403).send({ message: 'Require Admin role!' })
            return;
        })
    })
}

const isModerator = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return;
        }

        Role.findOne({
            _id: user.role
        }, (err, role) => {
            if (err) {
                res.status(500).send({ message: err })
                return;
            }
            
            if (role.name === 'moderator') {
                next()
                return
            }

            res.status(403).send({ message: 'Require Moderator role!' })
            return;
        })
    })
}

const authJWT = {
    verifyToken,
    isAdmin,
    // isModerator
}
module.exports = authJWT