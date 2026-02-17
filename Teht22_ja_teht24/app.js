require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/book', bookRouter);

app.use(authenticateToken); //all routes below this line are protected



app.use('/borrower', borrowerRouter);




// Middleware function that verifies JWT token and blocks unauthorized requests
function authenticateToken(request, response, next) {
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      return response.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return response.sendStatus(401);
    }

    jwt.verify(token, process.env.MY_TOKEN, function(err, user) {
      if (err) {
        return response.sendStatus(403);
      }
      request.user = user;
      next();
    })
  }



module.exports = app;
