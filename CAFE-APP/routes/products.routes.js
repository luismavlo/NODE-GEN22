const express = require('express');

const productsController = require('./../controllers/products.controller');

const validProducts = (req, res, next) => {
  const { name, price, quantity } = req.body;
  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is required',
    });
  }

  next();
};

const router = express.Router();

router
  .route('/')
  .get(productsController.findAllProducts)
  .post(
    validProducts,
    productsController.createProduct
  );

router
  .route('/:id')
  .get(productsController.findOneProduct)
  .patch(
    validProducts,
    productsController.updateProduct
  )
  .delete(productsController.deleteProduct);

module.exports = router;
