const app = require('./app');

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
