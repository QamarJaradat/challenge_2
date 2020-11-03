var express = require('express')
var bodyparser = require('body-parser')
app = express()

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json())
app.use(express.static('client'))
var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-type': 'text/csv'
}



app.post('/', (req, res) => {
    console.log("got post request", req.body)
    res.status(201)
    // res.set(headers)
    res.send("okay" + req.body)
})

app.get('/', () => {

})

app.listen(3000)
console.log('lisening on 3000')


