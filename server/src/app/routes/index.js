const authRouter = require('./auth')
const orderRouter = require('./order')

const route = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, Content-Type, Accept'
        )
        next()
    })

    app.use('/api/auth', authRouter)
    app.use('/api/order', orderRouter)
}

module.exports = route