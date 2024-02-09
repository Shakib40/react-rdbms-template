const express = require('express');
const router = express.Router();
const USER_CONTROLLER = require('../controllers/user.controller');
const { VerifyToken } = require('../middleware/VerifyToken');

// Route to get all users
router.get('/list', VerifyToken, USER_CONTROLLER.GET_USER_LIST);

module.exports = router;
