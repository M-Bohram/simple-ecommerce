require("dotenv").config();
const express = require('express');
const next = require('next');
const bodyParser = require("body-parser");
const server = express();
const dbInit = require("./db");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const productRouter = require('./routes/product');

app.prepare().then(() => {

  server.use(bodyParser.json());

  server.use('/api/product', productRouter);

  dbInit();

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => console.error(err));
