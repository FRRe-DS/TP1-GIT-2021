const path = require('path');

/**
 * @description Home mock
 * @route GET /api/v1/home
 * @access Public
 */
exports.getHome = (req, res, next) => {
	res.sendFile(path.join(__dirname + '/../client/index.html'));
};
