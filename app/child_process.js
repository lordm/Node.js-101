var exec = require('child_process').exec

exec('ls', function(err, stdout, stderr){
  if(err){
    console.log("child processes failed with error: " + err.code);
  }
  console.log(stdout);
});
