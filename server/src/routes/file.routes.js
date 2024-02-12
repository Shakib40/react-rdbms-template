const express = require('express');
const router = express.Router();

const FILE_CONTROLLER = require('../controllers/file.controller');

router.get('/convert-into-image', FILE_CONTROLLER.DOWNLOAD_PNG);

module.exports = router;