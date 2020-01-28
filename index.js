require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const helmet = require('helmet');

const server = require('./server')

//middleware
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(server)



app.listen(PORT, console.log(`App listening to http://localhost:${PORT}`))


