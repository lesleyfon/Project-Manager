const { Router } = require('express');

const router = Router();
const UserModels = require('./../models/userModels')
router.post('/login', async (req, res, next) => {
    
})
router.post('/register', async (req, res, next) => {
    const {full_name, email, password} = req.body;
    if( !email || !password ){
        res.status(404).json({
            message: `Email and/Or password is Undefined`,
            email,
            password,
        })
    }else{
        const user = await UserModels.addUser({full_name, email, password})
        res.status(201).json({
            message: 'Successfully Created new user',
            user
        })

    }

})


module.exports = router;