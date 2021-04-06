/**
 * @description Home mock
 * @route GET /api/v1/home
 * @access Public
 */
exports.getHome = (req, res, next) => {
	res.status(200).json({ grupo: '12' });
};
