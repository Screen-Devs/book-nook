// dependencies
const express = require('express');
const path = require('path');
// middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
// module
const router = require('./routes');

const app = express();
const port = 3010;

// uri(s)
console.log("DIR NAME: ", __dirname)
const clientPath = path.resolve(__dirname, '../dist');
const mongoUri = 'mongodb://localhost:27017'

// Authentication Connections
const store = new MongoDBSession({
  uri: `${mongoUri}/Book_Nook`,
  collection: 'sessions',
})

app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(session({
  secret: 'dewey loves books',
  resave: false,
  saveUninitialized: false,
  store,
}))
app.use(router);
app.use(morgan('dev')); // TODO: change in production

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
});
