//importing node framework

var express = require(‘express’);
 

var app = express();

//Respond with "vishal" for requests that hit our root "/"

app.get(‘/’, function (req, res) {

res.send(‘hello All Vishal is here ’);

});

//listen to port 80 by default

app.listen(process.env.PORT || 80);
 

module.exports = app;
 

execute shell- npm install
