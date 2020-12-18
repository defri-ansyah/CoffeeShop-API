const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middlewares/upload')
const ProductsController = require('../controllers/ProductsController')
router
    .get('/', ProductsController.view)
    .get('/search', ProductsController.searchProduct)
    .get('/:id', ProductsController.getProductById)
    .post('/', uploadMulter.single('images'), ProductsController.insert)
    .patch('/:id', uploadMulter.single('images'), ProductsController.update)
    .delete('/:id', ProductsController.delete)

module.exports = router