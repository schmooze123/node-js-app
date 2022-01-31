var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hey! This is our Main branch, Happy Coding!, Happy Pipeline, Happy Learning!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World! Happy Staying" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great WOrk guys!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
