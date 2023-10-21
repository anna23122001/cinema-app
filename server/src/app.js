const fs = require('fs');
const path = require('path')
const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());

app.use(cors())
const router = require('./routers')

app.use(express.static(path.resolve('public')));


app.use('/api', router)



module.exports = app;