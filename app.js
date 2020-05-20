const express = require('express');
const http = require('http');
const path = require('path');
let app = express();

console.log(path.join(__dirname, 'build'));
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8081';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));