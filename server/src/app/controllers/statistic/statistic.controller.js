const db = require('../../data')
const Statistic = db.statistic

class StatisticController {
// [Get]
getOrderToday = (req, res) => {
    Statistic.find({}).exec((err, orders) => {
        if (err) {
            res.status(500).send({ message: err })
            return
        }

        res.json(orders.map(order => order.toClient()))
    })
}

// [POST] /api/order/getOrder

}

module.exports = new StatisticController
