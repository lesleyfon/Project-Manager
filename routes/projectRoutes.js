const { Router } = require('express');

const router = Router();
const ProjectModels =  require('./../models/projectModels')


router.get('/', async (req, res, next) => {

    res.status(200).json({
        Project: await ProjectModels.fetchProjects(),
    })
})
// router.post('/register', (req, res, next) => {

// })


module.exports = router;