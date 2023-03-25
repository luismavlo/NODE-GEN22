const Product = require('./../models/products.model');

exports.findAllProducts = async (req, res) => {
  const products = await Product.findAll({
    where: {
      status: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'The query has been done successfully',
    results: products.length,
    products,
  });
};

exports.createProduct = async (req, res) => {
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  const product = await Product.create({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(201).json({
    status: 'success',
    message: 'The product has been created!',
    product,
  });
};

exports.updateProduct = async (req, res) => {
  const { product } = req;
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  await product.update({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(200).json({
    status: 'success',
    message: 'The product has been updated',
  });
};

exports.deleteProduct = async (req, res) => {
  const { product } = req;

  await product.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The product has ben deleted',
  });
};

exports.findOneProduct = async (req, res) => {
  const { product } = req;

  res.status(200).json({
    status: 'success',
    message: 'The query has been done successfully',
    product,
  });
};
