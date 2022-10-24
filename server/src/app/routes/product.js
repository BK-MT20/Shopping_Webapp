const express = require('express')
const router = express.Router()
const product = require('../controllers/product/product.controller')

/**
 * @swagger
 * /api/product/getAllProduct:
 *  get:
 *      summary: Get All Product
 *      description: Get list contains all product
 *      responses:
 *          200:
 *              description: Get list successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          properties:
 *                              type: object
 *                              properties:
 *                                   id: 
 *                                      type: string
 *                                      description: Order ID
 *                                      example: 1234566789abc
 *                                   name: 
 *                                      type: string
 *                                      description: name
 *                                      example: cr7's tshirt
 *                                   image: 
 *                                      type: [string]
 *                                      description: image
 *                                      example: 'https://i.pinimg.com/originals/b5/06/be/b506be61e5fa23a265b09db2cf7713cd.jpg'
 *                                   price: 
 *                                      type: number
 *                                      description: price
 *                                      example: 44
 *                                   colors: 
 *                                      type: [string]
 *                                      description: color
 *                                      example: red
 *                                   remained: 
 *                                      type: number
 *                                      description: number
 *                                      example: 1
 *                                   type: 
 *                                      type: string
 *                                      description: type
 *                                      example: shirts || pants || bags || glasses || shoes || sandals
 *          400:
 *              description: User already existed.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: User already existed.
 *          401:
 *              description: Unauthorized.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: Unauthorized.
 *          402:
 *              description: No Token Provided.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: No Token Provided.
 *          403:
 *              description: Required Admin Role.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: Required Admin Role.
 *          500:
 *              description: Internal Server Error.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: Internal Server Error.
 */
router.get('/getAllProduct/',product.getAllProduct)
router.post('/createProduct',product.createProduct)
router.get('/:id',product.getById)
router.put('/:id',product.updateProduct)
router.delete('/:id',product.deleteProduct)




module.exports = router
