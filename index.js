require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const helmet = require('helmet');

//middleware
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(PORT, console.log(`App listening to http://localhost:${PORT}`))


