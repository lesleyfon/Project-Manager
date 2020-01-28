const express = require('express');
const server = express.Router();

const ProjectRoutes = require('./routes/projectRoutes')

server.use('/api/project', ProjectRoutes)

server.get('/', (req,res, next) => {
    res.status(200).send('Welcome to the project manager')
})




module.exports = server;