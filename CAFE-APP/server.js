const app = require('./app');

const port = 3002;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
