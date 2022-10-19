const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../../data')
const User = db.user
const Role = db.role

class AuthController {

    // [POST] api/auth/signup
    signup = (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })

        console.log('api signup');
    
        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }
    
            Role.find(
                { name: req.body.role }
                , (err, role) => {
                    if (err) {
                        res.status(500).send({ message: err })
                        return
                    }

                    user.role = role._id
                    user.save((err, user) => {
                        if (err) {
                            res.status(500).send({ message: err })
                            return
                        }
                        res.send({ message: 'User was registered successfully!' })
                    })
                }
            )
        })
    }

    // [POST] api/auth/signin
    signin(req, res) {
        User.findOne({
            username: req.body.username
        })
        .populate("role", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }
    
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
    
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
    
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: 'Invalid password!'
                })
            }
    
            var accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_SECRET_KEY, {
                expiresIn: '5m'
            })
    
            // var refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET_KEY, {
            //     expiresIn: '1d'
            // })
    
            res
                .cookie('act', accessToken, {
                    httpOnly: true,
                    sameSite: 'None',
                    secure: false,
                    maxAge: 5*60*1000
                })
                // .cookie('rft', refreshToken, {
                //     httpOnly: true,
                //     sameSite: 'None',
                //     secure: false,
                //     maxAge: 24*60*60*1000
                // })
    
    
            // var authorities = user.roles.map(role => `ROLE_${role.name.toUpperCase()}`)
            res.status(200).send({
                // id: user.id,
                // username: user.username,
                // email: user.email,
                // roles: authorities,
                accessToken: accessToken,
                expiresIn: 5*60
            })
        })
    }
}

module.exports = new AuthController