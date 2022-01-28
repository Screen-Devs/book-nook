// dependencies
const express = require('express');
const path = require('path');

// middleware
const morgan = require('morgan');

const app = express();
const port = 3000;

const clientPath = path.resolve(__dirname, '../client/dist');

app.use(express.static(clientPath));
app.use(morgan('dev')); // TODO: change in production

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
});