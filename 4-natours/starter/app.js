// It is a convention to have all the Express config in app.js file
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Middlewares

// Middleware
// Using third party middleware => this case morgan
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Define routes => determine how an application responds to a certain client request, so to a certain url

// Starting an API: handling get requests
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

/*
app.get('/api/v1/tours', getAllTours);
// Responding to url parameters => Getting only one tour
app.get('/api/v1/tours/:id', getTour);
// Handling post requests
app.post('/api/v1/tours', createTour);
// Handling patch requests to update data
app.patch('/api/v1/tours/:id', updateTour);
// Handling delete requests
app.delete('/api/v1/tours/:id', deleteTour);
*/

// 3) Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
