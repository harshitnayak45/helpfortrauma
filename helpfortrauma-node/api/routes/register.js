const express = require('express');
const router = express.Router();
const Register = require('../model/user-info.vo');
const conRegister = require('../controller/con-register');

/* ****************************Get all registered user**************************** */
router.get('/user/all', conRegister.getAllregisterUser);

/* ****************************Get all registered user**************************** */
router.delete('/delete/all', conRegister.deleteAllregisterUser);

/* *******************************User Registration************************************* */
router.post('/user', conRegister.addUpdateUser);

module.exports = router;