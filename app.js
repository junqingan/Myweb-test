var express = require('express');
var app = express();
const { port } = require('./config.json');
app.use(express.static('dist'));
app.get('/', function(req, res) {
    res.sendfile('./dist/page/index.html');
});
app.get('/about', function(req, res) {
    res.sendfile('./dist/page/about.html');
});
app.get('/ContactUs', function(req, res) {
    res.sendfile('./dist/page/ContactUs.html');
});

app.listen(port, function() {
    console.log(`server on http://localhost:${port}`);
})