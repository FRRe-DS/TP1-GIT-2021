const path = require('path');

/**
 * @description Home mock
 * @route GET /api/v1/home
 * @access Public
 */
exports.getHome = (req, res, next) => {
	res.json({
		hola: 'mundo',
	});
};
