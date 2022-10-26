const express = require('express')
const router = express.Router()
const product = require('../controllers/product/product.controller')

router.get('/getAllProduct/',product.getAllProduct)
router.post('/createProduct',product.createProduct)
router.get('/:id',product.getById)
router.put('/:id',product.updateProduct)
router.delete('/:id',product.deleteProduct)




module.exports = router
