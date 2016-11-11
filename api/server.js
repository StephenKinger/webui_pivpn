/**
 * @file defines all server routes for the Users managed in OpenVPN
 * @name api.server.js
 * @author Stephen Kinger 
 */
 
/**
 * @module api
 */

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var cors       = require('cors');

app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port     = process.env.PORT || 3000; // set our port

/**
 * User objects and functions
 * @var {Users}
 * @inner
 */
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

/**
   * Users REST API User end-point
   * @endpoint /api/users
   * @name apiUsers
   * @version v1
   * @since v1
   * @description Users REST API user end-point
   */
router.route('/users')

	// create a new user (accessed at POST http://localhost:8080/api/users)
  /**
   * Create a new user
   */
	.post(function(req, res) {
	    console.log("post request");
		var newUser = req.body;
		console.log(newUser);
		Users.addUser(newUser);
		userList = Users.processUserFile("/etc/openvpn/easy-rsa/keys/index.txt");
// 		var userAdded = Users.User()
		res.json(userList);
	})


  /**
   * Return the declared user list
   */
	.get(function(req, res) {
		userList = Users.processUserFile("/etc/openvpn/easy-rsa/keys/index.txt");
		res.json(userList);
	});

/**
 * On routes that end in /users/:name
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
router.route('/users/:name')

	/**
	 * User getter
	 * @memberof users
	 * @function
	 * @name.
	 */
 	.get(function(req, res) {
 	  //console.log(req);
 	  console.log(req.params.name);
 	  //  var fs = require('fs');
 	  //  fs.read
// 		res.json({name: 'Anonymous'});
      var file = '/home/steph/ovpns/' + req.params.name + '.ovpn';
      res.download(file); // Set disposition and send it.
	})

	// update the user with this id
	.put(function(req, res) {
	   //var file = '/home/steph/ovpns/' + req.params.name + '.ovpn';
	   Users.updateUser(req.params.name);
	   userList = Users.processUserFile("/etc/openvpn/easy-rsa/keys/index.txt");
	   res.json(userList);
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
