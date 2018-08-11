const express = require('express');
const router = express.Router();
const conUser = require('../controller/con-user');
const checkAuth = require('../middleware/check-auth')

/* ****************************Delete User by Id**************************** */
router.delete('/delete/:_id', checkAuth ,conUser.deleteUser);

/* ****************************Delete User by Id**************************** */
router.get('/:_id', checkAuth ,conUser.getUserById);


module.exports = router;