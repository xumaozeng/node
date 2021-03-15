const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()

app.use(express.static(__dirname + '/'))
app.use('/api', proxy({ target: 'http://localhost:4000' }))
app.listen(3000)