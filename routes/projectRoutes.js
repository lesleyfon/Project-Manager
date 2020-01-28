const { Router } = require('express');
const bcrypt = require('bcryptjs');

const router = Router();
const ProjectModels =  require('./../models/projectModels')


router.get('/', async (req, res, next) => {

    res.status(200).json({
        Project: await ProjectModels.fetchProjects(),
    })
})



module.exports = router;