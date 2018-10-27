const express = require('express');
const route = express.Router();

route.get('/test', (req, res) => {
	res.json({ msg: 'Users route works' });
});

module.exports = route;
