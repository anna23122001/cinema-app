const fs = require('fs');
const path = require('path');
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 5000;

// process

// Dowloading
app.get('/download', (req, res) => {
    console.log('download');
    res.download(path.resolve('like.txt'))
})

// Redirect
app.get('/phones', (req, res) => {
    res.redirect('/contact');
})

// send query params

app.get('/codes', (req, res) => {
    console.log(first)
    req.query
})



const server = http.createServer(app);

server.listen(PORT, () =>
    console.log(`server has been started on port ${PORT}`));


