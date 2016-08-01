var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, addresses, family){
  console.log('addresses: ', addresses); // addresses:  213.158.189.159
});
