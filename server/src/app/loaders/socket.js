const notificationService = require('../services/notification')

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user conntected.')

        socket.on('newOrder', (data) => {
            console.log('Socket: New Oder ::', {data})
            socket.broadcast.emit('newOrder', data)
            notificationService.addNewNotification(data)
        })
    })
}