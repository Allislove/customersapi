const express = require('express')
const app = express()
// const port = process.env.port || 3000;
const port = process.env.port || 7000;

const Customers = require('./src/customers/routes');
const Middlewares = require("./src/middlewares/ConnectionSetup");


app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Sever on PORT: ", port)
});

Middlewares.habilitarCors(app);

app.use('', Customers);
app.use('', Customers);
