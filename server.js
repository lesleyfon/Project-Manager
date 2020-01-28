const express = require('express');
const server = express.Router();

const ProjectRoutes = require('./routes/projectRoutes')
const UserRoutes = require('./routes/userRoutes')

server.use('/api/project', ProjectRoutes)
server.use('/api/user', UserRoutes)

server.get('/', (req,res, next) => {
    res.status(200).send('Welcome to the project manager')
})




module.exports = server;