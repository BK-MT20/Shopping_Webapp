
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user conntected.');

        socket.on('newOrder', (data) => {
            console.log('Socket: New Oder ::', {data});
            socket.broadcast.emit('newOrder', data);
        })

        socket.on('confirmOrder', (data) => {
            console.log('Socket: Confirm Oder ::', {data});
            socket.broadcast.emit('confirmOrder', data);
        })

        socket.on('declineOrder', (data) => {
            console.log('Socket: Decline Oder ::', {data});
            socket.broadcast.emit('declineOrder', data);
        })
    })
}