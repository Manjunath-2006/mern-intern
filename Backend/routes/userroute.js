const express = require('express');
const router= express.Router();
const{
    registerUser,
    loginUser,
    getUsers,
    getUserById,
}=require('../Controllers/usercontroller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
module.exports = router;