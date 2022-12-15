const express = require('express');
const userRouter = require('./users/usersRouter');

const server = express();

server.use(express.json());
server.use('/api/users', userRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
module.exports = server;