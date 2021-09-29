process.stdin.resume();
process.stdin.setEncoding('utf8');

function sq( v ) {
   return ( parseInt( v ) * parseInt( v ) ).toString();
}


var stdin = '';
process.stdin
  .on('data', function (chunk) {
  stdin += chunk;
})
  .on('end', function() {
  var lines = stdin.trim().split('\n');
  for ( var i=0; i<lines.length; i++ ) {
    process.stdout.write( sq( lines[ i ] ) );
  }
});

