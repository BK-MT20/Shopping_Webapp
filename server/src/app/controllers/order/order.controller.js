const jwt = require('jsonwebtoken')
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

    // [POST] /api/order/confirmOrder
    confirmOrder = (req, res) => {
        Order.findById(req.body.id).exec((err, order) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            order.status = 'confirmed'
            order.confirmByAdminId = req.userId

            order.save((err, order) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                res.status(200).send({ message: 'Confirm Order Successfully!' })
            })
        })
    }

    // [POST] /api/order/declineOrder
    declineOrder = (req, res) => {
        Order.findById(req.body.id).exec((err, order) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            order.status = 'declined'
            order.confirmByAdminId = req.userId
            order.declineReason = req.body.reason

            order.save((err, order) => {
                if (err) {
                    res.status(500).send({ message: err })
                    return
                }

                res.status(200).send({ message: 'Decline Order Successfully!' })
            })
        })
    }
    //  [POST] /api/order/createOrder
    createOrder = (req, res) => {
        const newOrder = new Order(req.body)
        newOrder.customerId = req.userId
        newOrder.save((err, order) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }

            res.status(200).send({ message: 'Create Order Successfully!' })
        })
    }
}

module.exports = new OrderController