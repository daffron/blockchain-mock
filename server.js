const path = require('path')
const express = require('express')
const apiRoutes = require('./router')
var server = express()

server.use('/merchant/', apiRoutes)

module.exports = server
