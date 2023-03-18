exports.findAllProducts = (req, res) => {
  const { requestTime } = req;

  res.status(200).json({
    message: 'Hello From the get route',
    requestTime,
  });
};

exports.createProduct = (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: 'Hello From the post route',
  });
};

exports.updateProduct = (req, res) => {
  console.log(req);
  res.json({
    message: 'Hello From the patch route',
  });
};

exports.deleteProduct = (req, res) => {
  console.log(req.params.id);
  res.json({
    message: 'Hello From the delete route',
  });
};

exports.findOneProduct = (req, res) => {
  console.log(req.params.id);
  res.json({
    message: 'Hello from the get route by id',
  });
};
