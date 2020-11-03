var express = require('express')
var bodyparser = require('body-parser')
var app = express()

app.use(bodyparser.json())
app.use(express.static('client'))

app.listen(3000)
console.log('lisening on 3000')


app.post('/', (req, res) => {
    console.log("got post request")
})

