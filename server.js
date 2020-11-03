var express = require('express')
var bodyparser = require('body-parser');
const { join } = require('path');
app = express()

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json())
app.use(express.static('client'))


var convertedfile
app.post('/', (req, res) => {
    console.log("got post request")
    // res.status(201)
    convertedfile = jsonToCSV(req.body.data)
    res.send(convertedfile)
})

app.listen(3000)
console.log('lisening on 3000')

var jsonToCSV = (obj) => {
    obj = JSON.parse(obj)
    var stringresult = ''
    stringresult += Object.keys(obj).slice(0, -1).join(',')
    var counter = 1

    var find = (obj) => {
        stringresult += "\n"
        stringresult += counter + ". "
        counter++
        stringresult += Object.values(obj).slice(0, -1).join(',')
        if (obj.children.length !== 0) {
            obj.children.forEach(element => {
                find(element)
            });
        }
    }

    find(obj)
    return stringresult
}


