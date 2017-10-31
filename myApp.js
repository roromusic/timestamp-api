
var express = require('express');
var app = express();

app.get('/yo', function(req, res) {
  res.send('Response String');
})