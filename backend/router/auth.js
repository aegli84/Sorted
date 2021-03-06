const router = require('express').Router();
const authController = require('../controller/auth')

router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)

module.exports = router;
