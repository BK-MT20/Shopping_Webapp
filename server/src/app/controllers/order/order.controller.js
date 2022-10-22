const db = require('../../data')
const Order = db.order

class OrderController {
    // [Get] /api/order/getAllOrders
    getAllOrders = (req, res) => {
        Order.find({}).exec((err, orders) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            res.json(orders.map(order => order.toClient()))
        })
    }

    // [POST] /api/order/getOrder
    getOrder = (req, res) => {
        Order.findById(req.body.id).exec((err, order) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            res.json(order.toClient())
        })
    }
}

module.exports = new OrderController