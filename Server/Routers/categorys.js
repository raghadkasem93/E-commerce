const express = require('express')
const router = express.Router()
const categoryController = require('../Controllers/categoryController')
const autho= require('../Controllers/middleware/auth')



router.post('/',autho,categoryController.createCategory)
router.get('/',categoryController.getCategory)

module.exports=router

