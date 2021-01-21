const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const {port} = require("./config.js")
const router = require('./router.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const server = app.listen(port, async () => {
	console.log(`API started: Listening on port ${port}.`);
});

process.on('SIGTERM', () => {
	console.log('Gracefully closing server.\n');
	server.close();
});
