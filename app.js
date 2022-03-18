// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
//   console.log('Im here');
// }).listen(8080);
var express= require('express')
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    port:""
  });
const mock_data= [{
    "name":"bushra baig",
    "age": 21,
    "is_married": false,
    "hobbies": ["cooking", "gaming"],
    "address": {
        "street1": "4126 glenwood street",
        "street2":"",
        "apartment": "",
        "city": "fremont"
    }
}, 
{
    "name":"saanya",
    "age": 21,
    "is_married": true,
    "hobbies": ["cooking", "gaming"],
    "address": {
        "street1": "4126 glenwood street",
        "street2":"",
        "apartment": "",
        "city": "fremont"
    }
}
]
var app= express()
app.get('/', function(req, res){
    res.send('hello')
})
app.get('/bushra', function (req, res){
    res.send('bushra is here')
})
app.get('/users', function (req, res){
    res.send(mock_data)
} )
app.get('/usersfromdb', function (req, res){
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });
} )
app.listen(8080)