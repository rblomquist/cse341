const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require("./db/connect");


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 8080;
const app = express();

app
.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    "Access-Control-Allow_Headers",
    "Origin, X-Requested_With, Content-Type, Accept, Z-Key"
  );
  res.setHeader("content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})
.use('/', require("./routes"));

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });