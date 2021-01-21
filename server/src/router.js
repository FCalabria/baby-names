const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
	res.status(200);
	res.send('Hello world!');
});

// TODO: Write the missing routes  and connect them with controller.js