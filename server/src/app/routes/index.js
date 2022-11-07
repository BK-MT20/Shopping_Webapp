const authRouter = require('./auth')
const orderRouter = require('./order')
const productRouter = require ('./product')
const searchRouter = require('./search')
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
    app.use('/api/product', productRouter)
    app.use('/api/search', searchRouter)
}

module.exports = route