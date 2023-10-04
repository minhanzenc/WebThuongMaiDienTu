require('dotenv')
const express = require('express')
const app = express();
const port = process.env.PORT | 3001;
const route = require('./routes/index')
const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@localhost:27017/?authSource=admin', {})
const db = mongoose.connection;
db.on("err", console.error.bind(console, "connection error : "));

app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  `Port ${port}`;
  console.log(`app run on port http://localhost:${port}/`);
});
