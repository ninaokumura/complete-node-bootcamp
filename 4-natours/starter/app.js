// It is a convention to have all the Express config in app.js file
const fs = require('fs');
const express = require('express');
const app = express();

// Define routes => determine how an application responds to a certain client request, so to a certain url
// app.get('/', (req, res) => {
//   res
//     .status(404)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

// Starting an API: handling get requests

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
