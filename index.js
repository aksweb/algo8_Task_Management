const express = require('express');

const bodyParser = require('body-parser');
const apiBase = require('./src/routes/routes')

const app = express();

//middlewares
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes middlewares
app.use('/', apiBase)

const PORT = 3000 || process.env.PORT;

//server
app.listen(PORT, () => {
    console.log(`Server Started on the port ${PORT}`);
})

module.exports = app;
