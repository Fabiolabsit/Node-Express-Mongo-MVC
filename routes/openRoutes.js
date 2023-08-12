const express = require('express');
const router = express.Router();
const openController = require('../controller/openController');

router.route('/')
    .get(openController.getInfo)

module.exports = router;