const express = require('express');
const router = express.Router();

const { getHome } = require('../controllers/home');

router.route('/').get(getHom);

module.exports = router;
