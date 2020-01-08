const express = require('express');
require('./models');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const {
  signInController,
  signUpController,
  userContoroller
} = require('./controllers');

const app = express();

const port = 4000;

// TODO : express-session
app.use(
  session({
    secret: '@switzerland',
    resave: false,
    saveUninitialized: true
  })
);

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

// ? Optional : cors
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true
  })
);

app.get('/user', userContoroller);
app.post('/signin', signInController);
app.post('/signup', signUpController);

// NOTICE 테스트를 위한 코드 입니다. 건들지 않으셔도 좋습니다.
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`server listen on ${port}`);
  });
}

module.exports = app;
