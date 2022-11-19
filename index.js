const express = require('express')
const app = express()
const port = process.env.port || 3000;
const Customers = require('./src/customers/routes');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Sever on PORT: ", port)
});


app.use('', Customers);