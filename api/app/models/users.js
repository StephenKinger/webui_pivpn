


function User() {
      this.id = 'Unknown';
      this.name = 'Unknown';
      this.email = 'Unknown';
      this.location = 'Unknown';
      this.state = 'Unknown';
}


function addUser(user) {

    spawn = require( 'child_process' ).spawn,
    ls = spawn( 'sh', [ 'addUser.sh' ] );

    ls.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });
    
    ls.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
    });
    
    ls.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
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
