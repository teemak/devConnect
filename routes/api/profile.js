const express = require('express');
const route = express.Router();

route.get('/test', (req, res) => {
	res.json({ msg: 'Profile route works' });
});

module.exports = route;
