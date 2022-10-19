const mongoose = require('mongoose')
const initial = require('./dataSeeding')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require('../models/domain/user.model')
db.role = require('../models/domain/role.model')

db.ROLES = ['user', 'admin']

db.initial = initial

module.exports = db