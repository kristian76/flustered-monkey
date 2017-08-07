/**
 * Server to receive CMX data
 */
var express = require("express"),
    path = require("path"),
    DataStore = require("nedb"),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express(),
    db = new DataStore({filename: path.join("appdb.db"), autoload: true}),
    dist = path.join(__dirname, "dist");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(dist));

app.get("/api/card/:cardid", function (req, res) {

    res.format({
        'application/json': function () {
            res.send({
                'cardid': req.params.cardid
            });
        }
    });
});

var cardParser = bodyParser.urlencoded({ extended: false });

app.post("/api/card/:cardid", cardParser, function (req, res) {

    res.format({
        'application/json': function () {
            res.send({
                'cardid': req.params.cardid
            });
        }
    });
});

app.get("/api/status/card/:cardid", function (req, res) {

    res.format({
        'application/json': function () {
            res.send({
                'cardid': req.params.cardid,
                'cardstatus': Math.floor(Math.random() * 3)
            });
        }
    })
});

app.listen(process.env.PORT || 3000, function() {
    console.log("The server is listening");
});