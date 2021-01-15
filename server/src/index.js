const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./router.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const PORT = 3000;

const server = app.listen(PORT, async () => {
	// TODO: connect with firebase

	console.log(`API started: Listening on port ${PORT}.`);
});

process.on('SIGTERM', () => {
	console.log('Gracefully closing server.\n');

	// TODO: close connection with firebase
	server.close();
});
