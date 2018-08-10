const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3300;

const server = http.createServer(app);
server.listen(port, () => {
    console.log("xxxxxxx xxxxxxxxx server connnected to the port " + port);
})