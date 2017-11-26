var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('node_modules'));
app.use(express.static('public'));
app.use(express.static('templates'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//middleware error cb function
function errorCB(res, next) {
    return function (error, data) {
        if (error) next(error);
        res.send("hey");
    }
};

//GET routes
app.get('/all', function (req, res) {
    
    res.send('all');
});
app.get('/meme', function (req, res) {

    res.send('meme');
});


app.all('*', function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

// main error handler
// warning - not for use in production code!
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

// error handler to catch 404 and forward to main error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(process.env.PORT || 8002, function () {
    console.log('Andrea and Lana are on 8002 :)')
})