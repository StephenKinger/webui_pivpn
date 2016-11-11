// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var cors       = require('cors');
// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port     = process.env.PORT || 3000; // set our port

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
		var nom = req.body;
		console.log(nom);
		//res.json({ message: 'Not Implemented Yet!', name: nom });

		var user = [{ id: '260924094424Z', name: 'pivpn', state: 'Valid',
									location: 'Paris', email: 'myemail@mail'},
								{ id: 'none', name: 'other', state: 'Revoked',
								location: 'Moon', email: 'moon@mail'},
								{ id: 'titi', name: 'other', state: 'Valid',
 								location: 'Moon', email: 'sun@mail'},
								{ id: 'new', name : req.body.name, state: 'Valid',
								location: req.body.location, email: req.body.email}];
		res.json(user);
//		userFactory(10, "moi", 'titi@fmail', 'paris', 'valid');
	})

	// get all the bears (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res) {
		userList = Users.processUserFile("/etc/openvpn/easy-rsa/keys/index.txt");
		res.json(userList);
	});

/**
 * On routes that end in /users/:user_id
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
router.route('/users/:user_id')

	/**
	 * User getter
	 * @memberof users
	 * @function
	 * @name.
	 */
 	.get(function(req, res) {
		res.json({name: 'Anonymous'});
	})

	// update the user with this id
	.put(function(req, res) {
		res.json({ message: 'Not Implemented Yet!' });
	})

	// delete the bear with this id
	.delete(function(req, res) {
		res.json({ message: 'Not Implemented Yet!' });
	 });


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
