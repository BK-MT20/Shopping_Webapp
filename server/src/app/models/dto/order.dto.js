const { Joi, Segments } = require('celebrate')
    
const getOrderDto = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}

module.exports = {
    getOrderDto
}