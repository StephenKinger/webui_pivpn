/**
 * @file defines server base dir for Gui OpenVPN
 * @name api.server.js
 * @author Stephen Kinger
 */

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var cors       = require('cors');
var path = require("path");

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port     = process.env.PORT || 8091; // set our port

app.use('/', express.static(__dirname + '/../dist'));


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
