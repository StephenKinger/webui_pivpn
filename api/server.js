// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

var Users     = require('./app/models/users');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

	// create a new user (accessed at POST http://localhost:8080/api/users)
	.post(function(req, res) {
		let nom = req.body.name;
		console.log(nom);
		res.json({ message: 'Not Implemented Yet!', name: {nom} });
	})

	// get all the bears (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res) {
		res.json({name: 'Anonymous'});
	});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

	// get the user with that id
	.get(function(req, res) {
		res.json({name: 'Anonymous'});
		// Bear.findById(req.params.bear_id, function(err, bear) {
		// 	if (err)
		// 		res.send(err);
		// 	res.json(bear);
		// });
	})

	// update the user with this id
	.put(function(req, res) {
		// Bear.findById(req.params.bear_id, function(err, bear) {
		//
		// 	if (err)
		// 		res.send(err);
		//
		// 	bear.name = req.body.name;
		// 	bear.save(function(err) {
		// 		if (err)
		// 			res.send(err);
		//
		// 		res.json({ message: 'Bear updated!' });
		// 	});
		//
		res.json({ message: 'Not Implemented Yet!' });
		// });
	})

	// delete the bear with this id
	.delete(function(req, res) {
		// Bear.remove({
		// 	_id: req.params.bear_id
		// }, function(err, bear) {
		// 	if (err)
		// 		res.send(err);
		//
		// 	res.json({ message: 'Successfully deleted' });
		res.json({ message: 'Not Implemented Yet!' });
		// });

	 });


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);