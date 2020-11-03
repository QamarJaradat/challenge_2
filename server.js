var express = require('express')
var bodyparser = require('body-parser');
const { join } = require('path');
app = express()

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json())
app.use(express.static('client'))
var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-type': 'application/json'
}


var convertedfile
app.post('/', (req, res) => {
    console.log("got post request")
    // var obj = JSON.parse(req.body.data)
    // console.log((req.body.data))
    res.status(201)
    res.set(headers)
    convertedfile = jsonToCSV(req.body.data)
    console.log(convertedfile)
    res.end("Posted" + JSON.stringify(req.body.data))
})

app.get('/', () => {

})

app.listen(3000)
console.log('lisening on 3000')

var jsonToCSV = (obj) => {
    // return "good job"
    obj = JSON.parse(obj)
    var stringresult = ''
    stringresult += Object.keys(obj).slice(0, -1).join(',')
    stringresult += "\n"

    var find = (obj) => {
        stringresult += Object.values(obj).slice(0, -1).join(',')

    }
    find(obj)


    return stringresult
    // return obj.children[0].children


}


