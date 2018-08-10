const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* **********************************setting headers and methods************************** */
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers", 
		"*"
	);
	if(req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
		return res.status(200).json({});
	}
	next();
});

/* **********************************Initializing Routes ********************************* */
app.use('', (req, res, next) => {
    res.status(201).json({
        message: "Welcome to the app ............."
    });
});

module.exports = app;