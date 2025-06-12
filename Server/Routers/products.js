const express = require('express')
const router = express.Router()
const productController = require('../Controllers/productController')
const autho = require('../Controllers/middleware/auth')


router.post('/',productController.createProduct)

router.get('/:name?',productController.getAllProducts)
router.get('/productsById/:id',autho,productController.getProductById)
router.put('/productsUpdatById/:id',autho,productController.updateProduct)
router.delete('/productDelete/:id',autho,productController.deleteProduct)
module.exports=router