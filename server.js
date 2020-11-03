var express = require('express')
var bodyparser = require(body_parser)
var app = express()

app.use(bodyparser.json())
app.use(express.static('client'))

