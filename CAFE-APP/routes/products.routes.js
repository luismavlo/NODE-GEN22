const express = require('express');

const productsController = require('./../controllers/products.controller');
const productsMiddleware = require('./../middlewares/products.middleware');

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(productsMiddleware.validProducts, productsController.createProduct);

router
  .route('/:id')
  .get(productsMiddleware.validExistProduct, productsController.findOneProduct)
  .patch(
    productsMiddleware.validProducts,
    productsMiddleware.validExistProduct,
    productsController.updateProduct
  )
  .delete(
    productsMiddleware.validExistProduct,
    productsController.deleteProduct
  );

module.exports = router;
