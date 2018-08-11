const express = require('express');
const router = express.Router();
const conLogin = require('../controller/con-login');

/* ****************************Login User and Authenticate**************************** */
router.post('/authenticate', conLogin.authenticate);

/* *******************************User Registration************************************* */

module.exports = router;