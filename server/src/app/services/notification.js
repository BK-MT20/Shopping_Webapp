const db = require('../data')
const Notification = db.notification
const User = db.user

const addNewNotification = (data) => {
    User.findById(data.customer.id).exec((err, customer) => {
        if (err) {
            console.log('addNewNotification - Find Customer Error: ', err)
            return
        }

        const notification = new Notification({
            orderId: data.orderId,
            customer: {
                id: data.customer.id,
                name: customer.username
            }
        })

        notification.save((err, notification) => {
            console.log('addNewNotification - Save Notification Error: ', err)
        })
    })
} 

module.exports = {
    addNewNotification
}