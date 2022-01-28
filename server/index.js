// dependencies
const express = require('express');
const path = require('path');

// middleware
const morgan = require('morgan');

const app = express();
const port = 3010;

console.log("DIR NAME: ", __dirname)

const clientPath = path.resolve(__dirname, '../dist');

app.use(express.static(clientPath));
app.use(morgan('dev')); // TODO: change in production

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
});