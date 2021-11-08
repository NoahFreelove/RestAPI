const express = require('express');
const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const bodyParser = require("body-parser")
const cors = require('cors')

require('dotenv/config')

const app = express();
const port = process.env.PORT || 3000;
const postsRoute = require('./routes/posts');
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('To view a post go to /posts/');
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log("Connected to db"));


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
