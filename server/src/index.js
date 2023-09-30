const fs = require('fs');
const path = require('path');
const http = require('http');

const app = require('./app');

const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server has been started on port ${PORT}`))


