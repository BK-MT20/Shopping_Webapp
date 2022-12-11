const express = require('express')
const controller = require('../controllers/statistic/statistic.controller')
const router = express.Router();

router.get(
    '/getOrderToday',controller.getOrderToday
)

module.exports = router;
