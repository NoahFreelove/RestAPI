const express = require('express');
const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const bodyParser = require("body-parser")

require('dotenv/config')

const app = express();
const port = process.env.PORT || 3000;
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("Connected to db"));


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
