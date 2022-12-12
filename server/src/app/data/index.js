const mongoose = require('mongoose')
const initial = require('./dataSeeding')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require('../models/domain/user.model')
db.role = require('../models/domain/role.model')
db.order = require('../models/domain/order.model')
db.product = require('../models/domain/product.model')
<<<<<<< HEAD
db.notification = require('../models/domain/notification.model')
=======
db.statistic = require('../models/domain/statistic.model')
>>>>>>> Feature/AS-1

db.ROLES = ['user', 'admin']

db.initial = initial

module.exports = db