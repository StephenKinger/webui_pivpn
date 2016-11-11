


function User() {
      this.id = 'Unknown';
      this.name = 'Unknown';
      this.email = 'Unknown';
      this.location = 'Unknown';
      this.state = 'Unknown';
}


function addUser(user) {

  var spawn = require('child_process').spawn;
//   var child = spawn('sudo', ['/opt/pivpn/makeOVPN.sh']);
  var child = spawn('ls');
  // executes `pwd`
  child.stdout.on('data', function(block){
    if (block == 'Enter a Name for the Client'){
      child.stdin.write('Myname\n');
      console.log(block);
    }

    if (block == 'Enter the password for the client:') {
      child.stdin.write('MyPassword\n');
      console.log(block);
    }

    if (block == 'Enter the password again to verify:') {
      child.stdin.write('MyPassword\n');
      console.log(block);
    }
  });
  
  child.stderr.on('data', function(block){
    console.log(block);
  });

  child.on('close', function () {
    console.log("hjdfsdf");
    // manipulate content
  });

}

function processFile(inputFile) {
    var fs = require('fs');
    var myUserList = [];

    fs.readFileSync(inputFile).toString().match(/^.+$/gm).forEach(function (line) {
      var splitter = line.split('=');
      var userRead = new User();
      userRead.name = splitter[6].split('\/')[0];
      userRead.email = splitter[8];
      userRead.location = splitter[3].split('\/')[0];
      if (/^V/.test(line) == true) {
        console.log('Valid');
        userRead.state = 'Valid';
      }
      else if(/^R/.test(line) == true) {
        userRead.state = 'Revoked';
      }
      console.log(splitter[0].split(' '));
      userRead.id = splitter[0].split('\t')[1];
      myUserList.push(userRead);

    });
    return myUserList;
}

exports.User = User;
exports.processUserFile = processFile;
exports.addUser = addUser;
